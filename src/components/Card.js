import React from "react";
import planets from '../planets'

export default function Places(props) {
    const [planetData, setPlanet] = React.useState(planets.data)

    function shuffle() {
        setPlanet(planetData
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value))
    }

    React.useEffect(() => {
        shuffle()
    }, [])


    const planet = planetData.map(planet => {
        return <div className="card" key={planet.id}>
            <div className={planet.name}>
                <p className={`${planet.name}--name name`}>{planet.name}</p>
                <img src={planet.url} className={`${planet.name}--img`} alt={planet.name}></img>
            </div>
        </div>
    })

    return (
        <div className="container">
            {planet}
        </div>
    )
}