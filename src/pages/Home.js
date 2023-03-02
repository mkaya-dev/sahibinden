import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import SearchBar from "../component/SearchBar";
import "./All.css";

const Home = () => {

    const [marka, setMarkalar] = useState([]);
    const [markaName, setMarkaName] = useState("");
    const [filtrelenmisMarkalar, setFiltrelenmisMarkalar] = useState([]);



    useEffect(() => {
        const apicek = "https://parallelum.com.br/fipe/api/v1/carros/marcas"
        fetch(apicek)
            .then(Marcas => Marcas.json())
            .then(Marcas => {
                setMarkalar(Marcas)
                setFiltrelenmisMarkalar(Marcas)
            })
            
    }, []);

    

    const searchMarka = (markaAdi) => {
        setMarkaName(markaAdi.toLowerCase())
        if (marka.length > 0 && markaAdi !== "") {
            setFiltrelenmisMarkalar(marka.filter(m => m.nome.toLowerCase().includes(markaAdi)))
        } else {
            setFiltrelenmisMarkalar(marka)
        }
    }




    return (
        <div>
            <Header />
            <SearchBar placeholder="Marka Ara.." data={markaName} setData={searchMarka} />
            <div className="col-12 row row-cols-2 row-cols-md-6 g-2">
                {
                    filtrelenmisMarkalar.map(firmalar =>
                        <div>
                            <p className="cizgi-renk">
                                <Link to={`model/${firmalar.codigo}`} style={{ textDecoration: 'none', color: "black" }}>{firmalar.nome}</Link>
                            </p>
                        </div>

                    )
                }
            </div>

        </div>
    )
}

export default Home;