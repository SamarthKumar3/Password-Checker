import React, { useState, useEffect } from 'react';

import './Strength.css';

const Strength = (props) => {
    const [progress, setProgress] = useState('1%');
    const [message, setMessage] = useState("");
    const password = props.userInput;

    useEffect(() => {
        const handlePassword = (password) => {
            const strength = {
                length: 0,
                hasUpperCase: false,
                hasLowerCase: false,
                hasDigits: false,
                hasSpecialCharacter: false,
            };

            strength.length = password.length > 4 ? true : false;
            strength.hasUpperCase = /[A-Z]+/.test(password);
            strength.hasLowerCase = /[a-z]+/.test(password);
            strength.hasDigits = /[0-9]+/.test(password);
            strength.hasSpecialCharacter = /[^A-Za-z0-9]+/.test(password);

            let passStrength = Object.values(strength).filter(item => item === true).length;
            let val;
            if(password.length > 4){
                val = 
                    passStrength === 5
                        ? "Very Strong"
                        : passStrength === 4
                        ? "Strong"
                        : passStrength === 3 
                        ? "Medium" 
                        : "Weak";
            }
            else {
                val="too short!";
            }

            setMessage(val);
            if(password.length<=4 ){
                if(passStrength===0){
                    setProgress('1%');
                }
                else{
                    setProgress('10%');
                }
            }
            else{
                setProgress(passStrength===0 ? '1%' : `${(passStrength / 5) * 100}%`);
            }
            return passStrength;
        }

        handlePassword(password);

    }, [password]); 

    const getActiveColor = (type) => {
        if (type === "Very Strong") return "#00ac46";
        if (type === "Strong") return "#ADD535";
        if (type === "Medium") return "#fdc500";
        if (type === "Weak") return "#dc0000";
        return "#780000";
    };

    return (
        <>
            <div className="progress-bg">
            <div className='progress-container'></div>
                <div
                    className="progress"
                    style={{
                        width: progress,
                        backgroundColor: getActiveColor(message),
                        border: `solid ${getActiveColor(message)}`
                    }}
                ></div>
            </div>
            {message ? (
                <p className="message" style={{ color: getActiveColor(message) }}>
                    Your password is {message}
                </p>
            ) : null}
        </>
    );
}

export default Strength;
