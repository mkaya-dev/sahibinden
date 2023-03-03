import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import Header from "../component/Header";
import SearchBar from "../component/SearchBar";
import PuffLoader from "react-spinners/PuffLoader";




const Anos = () => {

    let { modelld, markald } = useParams();
    const [yil, setYillar] = useState([]);
    const [yilName, setYilName] = useState("");
    const [filitrelenmisYilar, setFilitrelenmisYilar] = useState([])
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const apicek = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${markald}/modelos/${modelld}/anos`
        setLoading(true)

        fetch(apicek)
            .then(age => age.json())
            .then(age => {
                setYillar(age)
                setFilitrelenmisYilar(age)
                setLoading(false)


            })
    }, [modelld, markald])

    const searchYil = (yilAdi) => {
        setYilName(yilAdi.toLowerCase())
        if (yil.length > 0 && yilAdi !== "") {
            setFilitrelenmisYilar(yil.filter(m => m.nome.toLowerCase().includes(yilAdi)))
        } else {
            setFilitrelenmisYilar(yil)
        }
    }


    return (
        <div>
            <Header />
            <SearchBar placeholder="Yıl ara.." data={yilName} setData={searchYil} />

            {loading ?

                <PuffLoader



                    color={"blue"}
                    loading={loading}
                    size={100}

                />

                :
            <div className="col-12 row row-cols-2 row-cols-md-6 g-2">

                {
                    filitrelenmisYilar.map(ages =>
                        <div className="cizgi-renk">
                            <p>
                                <Link to={`/valor/${markald}/${modelld}/${ages.codigo}`} style={{ textDecoration: 'none', color: "black" }}>{ages.nome}</Link>
                            </p>
                        </div>
                    )
                }

            </div>
}
            <Link to={`/Model/${markald}`}><button className="renk btn btn-outline-dark"><i class="fa-solid fa-chevron-left"></i></button></Link>

        </div>
    )
}

export default Anos;