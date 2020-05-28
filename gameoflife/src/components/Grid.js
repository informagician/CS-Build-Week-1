import React from 'react';
import Cell from './Cell';

const Grid = props => {

    const toggleCell = id => {

        let [i,j] = id.split('-')
        let itemNum = Number(i) * 25 + Number(j)

        props.setIsAlive(
            props.isAlive.map(item => {
                if(itemNum === props.isAlive.indexOf(item)){
                    return {...item,'status' : item['status'] === 0 ? 1 : 0}
                } else {
                    return item
                }
            })
        )
    }

    return(
        <div className="grid">
            {props.isAlive !== undefined && (
                props.isAlive.map(cell => (
                    <Cell 
                        isAlive={props.isAlive}
                        id={cell['row'] + '-' + cell['col']}
                        toggleCell={toggleCell}
                        status={cell['status']}
                        key={cell['row'] + '-' + cell['col']}
                        color={props.color}
                    />
                ))
            )}
        </div>
    )
}

export default Grid;