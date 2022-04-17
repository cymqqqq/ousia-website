import React from "react";
import  Team  from "./Team";
export default function About() {
	
	return (
		<div className="About">
			<div>
				<div className="div-right">
					<img src="about-us.jpeg"  width={450} height={300}  alt="" />

				</div>

				<div>
					<h1 className="about-us-h1">What is Ousia?</h1>
					<p className="about-us-p">Ousia is a NFTs composed of 10,000 unique human-shaped machines.</p>
                    <p className="about-us-p">It has the external human body to see the internal mechanical mechanism through perspective,</p>
					<p className="about-us-p">and implants 16 independent personalities at the same time.</p>
                    <p className="about-us-p">Ousia is determined to create a web3.0 security art brand,</p>
					<p className="about-us-p">we will Break the stereotype of traditional network security.</p>
				</div>
			</div>
			<h1 className="team-h1">Team</h1>
			<Team src="team1.jpeg" name="Arvian" notes="founder, Business Manager, community Manager"/>
			<Team src="team2.jpeg" name="Jack" notes="Co-founder, Lead Developer"/>
			<Team src="team3.jpeg" name="Veron" notes="Co-founder, Business Manager, community Manager"/>
			<Team src="team4.jpeg" name="Axin" notes="Co-founder, Artist"/>
		</div>
		
		
			
	);
}