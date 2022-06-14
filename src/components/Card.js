import React from "react";
import planets from '../planets'
import Score from './Score'

export default function Places() {
    const [planetData, setPlanet] = React.useState(planets.data)
    const [score, setScore] = React.useState(0)
    const [clickedCards, setClickedCard] = React.useState([])
    const [bestScore, setBestScore] = React.useState(0)

    function clickHandle(e) {
        let planet = e.currentTarget.className
        if (clickedCards.includes(planet)) {
            setClickedCard([])
            setScore(0)
        }
        else {
            setClickedCard(clickedCards.concat(planet))
            setScore(prevScore => prevScore + 1)
        }
    }

    function shuffle() {
        setPlanet(planetData
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value))
    }

    React.useEffect(() => {
        shuffle()
    }, [score])

    React.useEffect(() => {
        setBestScore(prev => {
            return score > bestScore ? score : prev 
        })
    }, [score])

    const planet = planetData.map(planet => {
        return <div className="card" key={planet.id}>
            <div className={planet.name} onClick={clickHandle}>
                <p className={`${planet.name}--name name`}>{planet.name}</p>
                <img src={planet.url} className={`${planet.name}--img`} alt={planet.name}></img>
            </div>
        </div>
    })

    return (
        <div>
            <Score score={score} bestScore={bestScore}></Score>
            <div className="container">
                {planet}
            </div>
        </div>
    )
}