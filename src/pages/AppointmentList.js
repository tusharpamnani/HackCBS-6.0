import React from 'react'
import styles from "../stylesheets/AppointmentList.module.css"
import ListHolder from '../components/ListHolder';
import Login from '../components/Login';
const tempData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function AppointmentList() {
  return (
    <div className={styles.screen}>
        {/* <ListHolder/> */}
        <Login/>
    </div>
  )
}

export default AppointmentList
