import ImageSlider from "./ImagesSliders";
import resim1 from "../resimler/araba1.jpg";
import resim2 from "../resimler/araba2.jpg";
import resim3 from "../resimler/araba3.jpg";
import resim4 from "../resimler/araba4.jpg";
import resim5 from "../resimler/araba5.jpg";
import resim6 from "../resimler/araba6.jpg";



const Slayt =() =>{


    const slides =[
        {url:resim1},
        {url:resim2},
        {url:resim3},
        {url:resim4},
        {url:resim5},
        {url:resim6}

    ];
    const containerStyles ={
        width:"1500px",
        height:"600px",
        margin:"0px auto",

    };
    return(
        <div>
            <div style={containerStyles}>
            <ImageSlider slides={slides} />
            </div>
        </div>
    )
}

export default Slayt;