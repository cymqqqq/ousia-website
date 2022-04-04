import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
const ImageSlider = () => {
    

    return (
        <AliceCarousel>
            <img src="ousia1.jpeg" className="sliderimage" alt="ousia1" width="70%" />
            <img src="ousia2.jpeg" className="sliderimage" alt="ousia2" width="70%" />
            <img src="ousia3.jpeg" className="sliderimage" alt="ousia3" width="70%" />
        </AliceCarousel>
        
    )
}

export default ImageSlider;