import React from "react";

const validation = (props) => {
    let validationMessage = 'Not things...'
    if (props.inputLength > 0 && props.inputLength <=4 ){
        validationMessage = "Text too Short!"
    } else if (props.inputLength >= 5) {
        validationMessage = 'Text Long enough!'
    }
    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    );

}

export default validation;
