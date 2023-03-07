import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../pages/All.css"

const MarkaList = () => {
    let {markald}=useParams
    const [liste, setListeleme] = useState([]);
    useEffect(() => {
        const apicek = "https://parallelum.com.br/fipe/api/v1/carros/marcas"
        fetch(apicek)
            .then(tem => tem.json())    
            .then(tem => {
                setListeleme(tem)
            })
    }, [markald]);
    return (
        <div>
            <div className="btn-group-vertical">  
            <h4 className="yazi-ortalama">Modeller</h4>  
                {
                    liste.map(butonlar =>
                        <div >
                            <Link to={`/model/${butonlar.codigo}`} ><button className=" btn btn-light" style={{color:"black"}}>{butonlar.nome}</button></Link>
                        </div> 
                    )
                }
            </div>
        </div>
    )
}

export default  MarkaList;