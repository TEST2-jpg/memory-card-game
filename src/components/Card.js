import React from "react";
import planets from '../planets'

export default function Places(props) {
    const planet = planets.data.map(planet => {
        return <div className="card" key={planet.id}>
            <div className={planet.name}>
            <p>{planet.name}</p>
            <img src={planet.url} className={`${planet.name}--img`}></img>
            </div>
        </div>
    })

    return (
        <div className="container">
            {planet}
        </div>
    )
}