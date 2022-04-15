import React from "react";

export default function Team ({src, name, notes}) {
    
  
    return (
        <div className="team-img">
            <img className="team-img-margin" src={src}  alt="" />
			<h3 className="team-h3">{name}</h3>
			<p className="team-intro">{notes}</p>
        </div>
    )
}


