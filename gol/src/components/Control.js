import React from 'react';

const Control = props => {

    const handleColor = e => {
        props.setColor(e.target.value)
    }

    return (
        <>
            <input type="button" value="Clear" onClick={() => props.setClear()} disabled={props.isActive ? true : false} />
            <input type="button" value="Generate Random" onClick={() => props.setRandom()} disabled={props.isActive ? true : false}/>
            <input type="button" value={props.gen === 0 ? 'Start' : 'Next'} onClick={() => props.start()} disabled={props.isActive ? true : false}/>
            <input type="button" value={props.isActive ? 'Stop Auto Play' : 'Auto Play'} onClick={() => props.setIsActive(!props.isActive)}/>
            <input type="button" value="Pause" onClick={() => props.setIsActive(false)} />
            <br/>
            <label>Change Color:
                <input type="color" placeholder={props.color} onChange={handleColor}/>
            </label>
        </>
    )
}

export default Control;