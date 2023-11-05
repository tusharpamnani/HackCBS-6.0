import React from 'react'
import styles from "../stylesheets/HeadingSection.module.css"
import {Link} from "react-router-dom"
function HeadingSection(props) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>Welcome {props.name}</h1>
        <p>{props.status === "doctor"?"View your Appointment requests ! ":"Book an appointment so we can help you !"}</p>
      </div>
      <div className={styles.right}>
        {props.status !== "doctor"?<button className={styles.transScribeButton} onClick={props.setState} >Book appointment</button>:
        <button className={styles.transScribeButton} onClick={props.setState} ><Link>View Appointments</Link></button>}
      </div>
    </div>
  )
}

export default HeadingSection
