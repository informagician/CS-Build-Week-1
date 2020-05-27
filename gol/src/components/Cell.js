import React from 'react';

const Cell = props => {

    return(
        <div 
            className="cell"
            id={props.id} 
            onClick={() => props.toggleCell(props.id)} 
            style={props.status ? {backgroundColor:props.color} : null}
        >
            
        </div>
    )
}

export default Cell;