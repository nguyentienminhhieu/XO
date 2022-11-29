import React, { useState } from 'react';
import Board from './Board';
import "./GameStyle.css";
import { calculateWinner } from './helpers';

export default function Game() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true); 
    const winner = calculateWinner(board);
    const handleClick = (index) => {
      const boardCopy = [... board];
      if(winner || boardCopy[index]) return;
      boardCopy[index] = xIsNext ? 'X' : 'O';
      boardCopy[index] = xIsNext ? 'X' : 'O';

      setBoard(boardCopy);
      setXIsNext((xIsNext) => !xIsNext);     
    };

    const handleResetGame= () => {
      setBoard(Array(9).fill(null));
    }
  return (
    <div>
        <Board cells={board} onClick= {handleClick}></Board>
        <button className='game-reset' onClick={handleResetGame}>ResetGame</button>
        {winner ? `Winnder is ${winner}` : ""}
    </div>
  )
}
