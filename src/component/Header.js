import React from "react"
import resim from "../resimler/bmw.png"
import resim1 from "../resimler/mercedes.jpg"
import resim2 from "../resimler/skoda.jpg"
import resim3 from "../resimler/mitsubishi.jpg"
import resim4 from "../resimler/wolsvegen.jpg"
import resim5 from "../resimler/ford.jpg"

const Header = () => {
    return (

        <div className="card-group">
            <div className="card ">
                <img src={resim} className="card-img-top" alt="..." />

            </div>
            <div className="card">
                <img src={resim1} className="card-img-top" alt="..." />

            </div>
            <div className="card  ">
                <img src={resim2} className="card-img-top" alt="..." />

            </div>
            <div className="card ">
                <img src={resim3} className="card-img-top" alt="..." />

            </div>
            <div className="card">
                <img src={resim4} className="card-img-top" alt="..." />

            </div>
            <div className="card">
                <img src={resim5} className="card-img-top" alt="..." />

            </div>
        </div>
    )
}

export default Header;