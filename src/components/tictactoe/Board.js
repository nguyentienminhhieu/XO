import React from 'react'
import Cell from './Cell'
import { calculateWinner } from './helpers'

export default function Board(props) {
    

    // const cells = [
    //     null, null, null,
    //     'x', 'x', 'x',
    //     null, null, null
    // ];
    
    return (
    <div className='game-board'>
    {props.cells.map((item, index) => (

        <Cell 
        key={index} 
        value={item} 
        onClick={() => props.onClick(index)} 
        className={item === 'X' ? 'is-x' : item === 'O' ? 'is-o' : ''}> </Cell>
        
    ))}
    </div>
  )
}
