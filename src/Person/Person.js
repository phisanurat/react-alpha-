import React from "react";
import './Person.css'
import styled from "styled-components";


const person = (props) => {

    const StyleDiv = styled.div`     
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    
    @media (min-width: 500px) {
        width: 450px;
    }
`
    const style = {
        '@media(min-width: 500px)': {
            width: '450px'
        }
    }

    return (
        // <div className="Person" style={style}>
        <StyleDiv>
            <p
                onClick={props.click}> i'm
                {props.name} and i'm
                {props.age},{props.children}
                <p style={style}>
                    #Touch to Delete..
                </p>
            </p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyleDiv>
        //</div>
    );
}

export default person;
