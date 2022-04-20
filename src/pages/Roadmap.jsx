
import React from "react";
import Content from "./roadmapcontent";

const Ousiamap = () => {
    return (
        <div>
            <div className="div-roadmap-pic">
                <img src="roadmap.jpg" alt="" />
            </div>
            <div className="div-roadmap-content">
                <h1 className="team-h1">
                    Ousia Map
                </h1>
                <p>
                    This is a marathon, there are no shortcuts, you can't be missing here
                </p>
                <Content />
            </div>
            
        </div>
    )
}


export default Ousiamap;
