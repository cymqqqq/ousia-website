import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

export default function Home() {
	const images = [
		{ url: "ousia1.jpeg" },
		{ url: "ousia2.jpeg" },
		{ url: "ousia3.jpeg" },
	  ];
	return (
		<div className="page home">
			<h1>Gently Used NFTs Looking For A new Home</h1>
			<p>Click the "Connect Wallet" Button above to access the minting page.</p>
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