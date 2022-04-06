import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

export default function ImageSlider() {
	const images = [
		{ url: "ousia1.jpeg" },
		{ url: "ousia2.jpeg" },
		{ url: "ousia3.jpeg" },
	  ];
	return (
		<div className="page home">
			
			<SimpleImageSlider
				width={1200}
				height={504}
				images={images}
				showBullets={true}
				showNavs={true}
			/>
		</div>
	);
}
