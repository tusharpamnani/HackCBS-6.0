import React from 'react'
import styles from "../stylesheets/AppointmentForm.module.css"
import SymptomInput from './SymptomInput'
import { useRef, useState } from "react"
import data from "../data/skinSymptoms.json"
const keys = Object.keys(data)
function AppointmentForm() {

  const optionRef = useRef()
  const [category, setCategory] = useState("Default")
  const handleSelect = (e) => {
    setCategory(e.target.value)
  }

  return (
    <div className={styles.screen}>
      <div className={styles.container}>
        <h1>Get An Appointment</h1>
        <hr />
        <form action="">
          <label htmlFor="">Location</label>
          <input type="text" />
          <label htmlFor="">Disease Category</label>
          <select ref={optionRef} onChange={handleSelect} name="" id="">
            {
              keys.map(key=>{
                return <option value={key}>{key}</option>
              })
            }
          </select>
          <div className={styles.diseaseSelectionField}>
            <SymptomInput category={category} />
          </div>
          <h4>Preferred Appointment Dates</h4>
          <label htmlFor="start">From</label>
          <input type="date" name="start" id="" />
          <label htmlFor="end">To</label>
          <input type="date" name='end' />
          <button>Find Doctors</button>
        </form>
      </div>
    </div>
  )
}

export default AppointmentForm
