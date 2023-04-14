import {React} from 'react';

export default function Input(props) {


    return(

        <div>
            <h1>Enter your task below:</h1>
            <input onChange={props.inputFunction} value={props.userInput}></input>
            <button onClick={props.buttonClick}>Add</button>

        </div>

    );
}