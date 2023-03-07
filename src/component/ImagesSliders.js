import { useState } from "react";

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const SliderStyles = {
        height: "100%",
        position: "relative",

    }

    const SlideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
    };

    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0,-50%)",
        left: "32px",
        fontSize: "45px",
        color: "white",
        zIndex: 1,
        cursor: "pointer",

    };

    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0,-50%)",
        right: "32px",
        fontSize: "45px",
        color: "white",
        zIndex: 1,
        cursor: "pointer",
    };

    const dotsContainerStyles = {
        display: "flex",
        justifyContent: "center",
    };

    
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    };

    console.log(currentIndex)


    return (
        <div style={SliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}><i class="fa-solid fa-left-long"></i></div>
            <div style={rightArrowStyles} onClick={goToNext}><i class="fa-solid fa-right-long"></i></div>

            <div style={SlideStyles}></div>
            <div style={dotsContainerStyles}></div>
        </div>
    )
}

export default ImageSlider;