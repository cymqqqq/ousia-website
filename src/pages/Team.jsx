import React from "react";
import Notes from "./Notes";
export default function Team ({src, name, notes}) {
    
  
    return (
        <div className="team-img">
            <img className="team-img-margin" src={src}  alt="" />
			<h3 className="team-h3">{name}</h3>
			<Notes notes={notes}/>
        </div>
    )
}


