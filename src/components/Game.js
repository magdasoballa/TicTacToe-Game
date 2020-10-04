import React, {useState} from "react";
import {Board} from "./Board";
import '../index.css'

export const Game = () => {
    const [winner, setWinner] = useState('')

    function findWinner(value) {
        setWinner(value)
    }

    return (
        <div className='board'>
            <Board findWinner={findWinner}/>
            {winner &&
            <div className='winner'>
                {winner} is the winner
            </div>}
        </div>
    )
}

