import React from "react";

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>i'm {props.name} and i'm {props.age}, {props.children} </p>
        </div>
    );


}

export default person;