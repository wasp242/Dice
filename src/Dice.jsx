import React from "react"
import './dice.css'

const Dice = (props) => {
    const { value } = props
    return (
        <div className="dice">
            <div className={`dot ${value === 1 || value === 3 || value === 5 ? 'show' : 'hide'}`}></div>
            <div className={`dot second ${value != 1 ? 'show' : 'hide'}`}></div>
            <div className={`dot third ${value != 1 ? 'show' : 'hide'}`}></div>
            <div className={`dot fourth ${value === 4 || value === 5 || value === 6 ? 'show' : 'hide'}`}></div>
            <div className={`dot fifth ${value === 4 || value === 5 || value === 6 ? 'show' : 'hide'}`}></div>
            <div className={`dot sixth ${value === 6 ? 'show' : 'hide'}`}></div>
            <div className={`dot seventh ${value === 6 ? 'show' : 'hide'}`}></div>
        </div>
    )
}

export default Dice;