import React from "react";

export default function Team ({src, name, notes}) {
    return (
        <div className="team-img">
            <img className="team-img-margin" src={src}  width={150} height={200}  alt="" />
			<h3>{name}</h3>
			<p>{notes}</p>
        </div>
    )
}


