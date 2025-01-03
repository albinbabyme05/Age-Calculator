
import React, { useState } from "react";
import './AgeCalculator.css'

const AgeCalculator = () =>{
    const [birthDate, setBirthDate] = useState('');
    const[age, setAge] = useState(0);

    function handleBirthDate(e){
        return setBirthDate(e.target.value)
    }

    function handleResult(){
        if(birthDate){
        const currentDate = new Date()
        const userEnterDate = new Date(birthDate);

        let year = currentDate.getFullYear() - userEnterDate.getFullYear();
        let month = currentDate.getMonth() - userEnterDate.getMonth();

        if (month < 0 || (month === 0 && currentDate.getDate() < userEnterDate.getDate())) {
            year--;
            month += 12;
        }

        // Calculate the exact months remaining
        if (currentDate.getDate() < userEnterDate.getDate()) {
            month--;
        }

        
        setAge(`${year} Years , ${month} Months`)
    }
    }

    function handleReset(){
        return (
        setAge(0),
        setBirthDate('')
    )
    }

    return(
        <div className="age-calculator-container">
            <div className="age-calculator-box">
                <h2>Age Calculator</h2>
                <input value={birthDate}
                type="date"
                onChange={handleBirthDate}
                ></input>
                
                <div className="button-group">
                    <button onClick={handleReset}>Reset</button>
                    <button onClick={handleResult}>Calculate</button>
                </div>
                {age !== 0 && <div className="age-result" > Your Age: {age} </div>}
   
            </div>
        </div>
    )
}

export default AgeCalculator










