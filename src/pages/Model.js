import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import Header from "../component/Header";
import MarkaList from "../component/MarkaList";
import Profile from "../component/Profil";
import SearchBar from "../component/SearchBar";
import PuffLoader from "react-spinners/PuffLoader";
import "./All.css"



const Model = () => {

    let { markald } = useParams();
    const [model, setModeller] = useState([]);
    const [modelName, setModelName] = useState("");
    const [filtrelenmisModeller, setFiltrelenmisModeller] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const apicek = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${markald}/modelos`
        setLoading(true)
        fetch(apicek)
            .then(Modelos => Modelos.json())
            .then(Modelos => {
                setModeller(Modelos.modelos)
                setFiltrelenmisModeller(Modelos.modelos)
                setLoading(false)

            })
    }, [markald]);



   // useEffect(() => {
        //setTimeout(() => {
        //}, 2000)
   // }, []);


    const searchModel = (modelAdi) => {
        setModelName(modelAdi.toLowerCase())
        if (model.length > 0 && modelAdi !== "") {
            setFiltrelenmisModeller(model.filter(m => m.nome.toLowerCase().includes(modelAdi)))
        } else {
            setFiltrelenmisModeller(model)
        }
    }



    return (
        <div>





            <Header />
            <SearchBar placeholder="Model Ara.." data={modelName} setData={searchModel} />
            <Profile />

            {loading ?

                <PuffLoader className="orta"



                    color={"blue"}
                    loading={loading}
                    size={100}

                />

                :
                <div className="sol col-10 row row-cols-2 row-cols-md-4  g-3">

                    {
                        filtrelenmisModeller.map(modeller =>
                            <div className="cizgi-renk">
                                <Link to={`Anos/${modeller.codigo}`} style={{ textDecoration: 'none', color: "black" }}><p>{modeller.nome}</p></Link>
                            </div>

                        )
                    }



                </div>
            }


            <Link to="/"><button className="renk btn btn-outline-dark"><i class="fa-solid fa-chevron-left"></i></button></Link>
            <div className="sag">

                <MarkaList  />

            </div>
        </div>

    )

}


export default Model;