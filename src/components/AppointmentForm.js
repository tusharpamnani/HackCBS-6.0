import React from 'react'
import styles from "../stylesheets/AppointmentForm.module.css"
import SymptomInput from './SymptomInput'

function AppointmentForm() {
  return (
    <div className={styles.screen}>
      <div className={styles.container}>
        <h1>Get An Appointment</h1>
        <hr />
        <div className={styles.diseaseSelectionField}>
        <SymptomInput/>
        </div>
        <input type="text" placeholder='Time Slot' />
        <button>Find Doctors</button>
      </div>
    </div>
  )
}

export default AppointmentForm
