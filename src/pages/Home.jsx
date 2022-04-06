import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
	
	return (
		<div className="div-left"
			>
			<ul>
				<li>
					<Link to="/team">
						<img src="ousia1.jpeg"  width={500} height={250} align="absmiddle" alt="" />
					</Link>
					<p> Background</p>
				</li>
				<li>
					<Link to="/about">
						<img src="ousia2.jpeg" width={500} height={250} align="absmiddle" alt="" />
					</Link>
					<p align="center"> Team Introduction</p>
				</li>
				<li>
					<Link to="/team">
						<img src="ousia3.jpeg" width={500}  height={250} align="absmiddle" alt="" />
					</Link>
				</li>

			</ul>
		</div>
	);
}