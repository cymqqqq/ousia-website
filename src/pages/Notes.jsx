import React from "react";
export default function Notes({notes}) {
    const str_notes = notes.split(", ");
    const list_notes = str_notes.map((note) => 
        <p className="team-intro">{note}</p>
    )
    return list_notes;
}