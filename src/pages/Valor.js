import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import Header from "../component/Header";
import MarkaList from "../component/MarkaList";
import PuffLoader from "react-spinners/PuffLoader";
import resim1 from "../resimler/aracarkaplan.png";

import "./All.css"

const Valor = () => {

    const [loading, setLoading] = useState(false);


    let { modelld, markald, yil } = useParams();
    const [ages, setAgess] = useState([]);
    useEffect(() => {
        const apicek = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${markald}/modelos/${modelld}/anos/${yil}`
        setLoading(true)

        fetch(apicek)
            .then(but => but.json())
            .then(but => {
                setAgess(but)
                setLoading(false)

            })
    }, [modelld, markald, yil])

    return (
        <div>
            <Header />
            <div className="container">
                <div class="row justify-content-center">
                    <div class="col-12">
                <img src={resim1} width="1400px"  /><br /><br /><br />

                    </div>
                </div>


            </div>
    
            {loading ?

                <PuffLoader className="orta"



                    color={"blue"}
                    loading={loading}
                    size={100}

                />

                :
                <ul class="sol classifiedInfoList">

                    <li>
                        <strong>Araç Bilgisi</strong>&nbsp;
                        <span class="classifiedId" id="classifiedId" data-classifiedid="1080006268"></span>
                    </li>
                    <li>
                        <strong>
                            Değer</strong>&nbsp;
                        <span>{ages.Valor}</span>
                    </li>
                    <li>
                        <strong>Marka</strong>&nbsp;
                        <span>{ages.Marca}&nbsp;</span>
                    </li>
                    <li>
                        <strong>Modeli</strong>&nbsp;
                        <span>{ages.Modelo}&nbsp;</span>
                    </li>
                    <li>
                        <strong>YılModel</strong>&nbsp;
                        <span>{ages.AnoModelo}&nbsp;</span>
                    </li>
                    <li>
                        <strong>Yakıt</strong>&nbsp;
                        <span class="">
                            {ages.Combustivel}</span>
                    </li>
                    <li>
                        <strong>CodeFipe</strong>&nbsp;
                        <span class="">
                            {ages.CodigoFipe}</span>
                    </li>
                    <li>
                        <strong>MesReferencia</strong>&nbsp;
                        <span class="">
                            {ages.MesReferencia}</span>
                    </li>
                    <li>
                        <strong>TipAraç</strong>&nbsp;
                        <span class="">
                            {ages.TipoVeiculo}</span>
                    </li>
                    <li>
                        <strong>Kısaltma Yakıt</strong>&nbsp;
                        <span class="">
                            {ages.SiglaCombustivel}</span>
                    </li>
                </ul>
            }
            <div className="sag">
                <div className="row justify-content-center">
                    <div className="col-11">
                        <Link to={`/Model/${markald}/Anos/${modelld}`}><button className="renk btn btn-outline-dark"><i class="fa-solid fa-chevron-left"></i></button></Link>

                    </div>

                </div>
            </div>
            <div className="sag">
                <div class="row justify-content-center">
                    <div class="col-11">
                        <MarkaList />
                    </div>
                </div>


            </div>


        </div>
    )
}

export default Valor;