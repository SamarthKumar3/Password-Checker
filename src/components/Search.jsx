import React, { useState } from "react";
import Strength from './Strength';
import './Search.css';

const Search = () => {
    const [inputVal, setInputVal] = useState('');
    const [inputType, setInputType] = useState('password');

    const handleInput = (e) => {
        setInputVal(e.target.value);
    }

    const handleShow = () => {
        if (inputType === 'password') {
            setInputType('text');
        }
        else {
            setInputType('password');
        }
    }

    const handleClear = () => {
        setInputVal("");
    }

    return <div className="Main">
        <div>
            <h1 className="Heading">React Password Checker</h1>
        </div>
        <div>
            <input value={inputVal} onChange={handleInput} type={inputType} className="input-area" placeholder="Type some password..." />
        </div>
        <div className="buttons">
            <button onClick={handleShow}>{inputType === 'password' ? 'Show' : 'Hide'}</button>
            <button onClick={handleClear}>Clear</button>
        </div>
        <div className="strength-display">
            <Strength userInput={inputVal} />
        </div>
    </div>
}

export default Search;