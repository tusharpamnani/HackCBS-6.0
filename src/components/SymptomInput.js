import React, { useState } from 'react'
import style from "../stylesheets/SymptomInput.module.css"
import skinData from "../data/skinSymptoms.json"

function SymptomInput(props) {

    const category = props.category;

    const [symptoms, setSymptoms] = useState([])
    const handleSelect = (e) => {
        const symptom = e.target.value
        if (!symptoms.includes(symptom)) {
            setSymptoms([...symptoms,symptom])
        }
    }

    const popSymptom = (e)=>{
        const newArr = symptoms.filter(symptom =>{return(symptom!==e.target.id)})
        setSymptoms(newArr)
    }

    return (
        <div className={style.container}>
            <div className={style.inputField}>
                <select name="" id="" onChange={handleSelect}>
                    {
                        skinData[`${category}`].map(symptom=>{
                            return <option key={symptom.symptom} value={symptom.symptom}>{symptom.symptom}</option>
                        })
                    }
                </select>
                <div className={style.optionBox}>
                {
                    symptoms.map(symptom => {
                        return <span id={symptom}>{symptom}<button onClick={popSymptom} id={symptom}>x</button> </span>
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default SymptomInput
