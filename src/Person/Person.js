import React from "react";
import './Person.css'

const person = (props) => {
    const style = {
        color: 'red'
    }

    return (
        <div className="Person">
            <p onClick={props.click}>i'm {props.name} and i'm {props.age}, {props.children}<p style={style}>#Touch to Delete..</p></p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default person;
