import React from "react";
import resim1 from "../resimler/araba1.jpg";
import resim2 from "../resimler/araba2.jpg";
import resim3 from "../resimler/araba3.jpg";
import resim4 from "../resimler/araba4.jpg";
import resim5 from "../resimler/araba5.jpg";
import resim6 from "../resimler/araba6.jpg";
import "../pages/All.css"
 
const Slayt = () => {
    return (
        <div className="ekran">
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={resim1}class="d-block" style={{width:1600,height:680}} alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={resim2} class="d-block" style={{width:1600,height:680}} alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={resim3} class="d-block" style={{width:1600,height:680}} alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={resim4} class="d-block" style={{width:1600,height:680}} alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={resim5} class="d-block" style={{width:1600,height:680}} alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={resim6} class="d-block" style={{width:1600,height:680}} alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Slayt;