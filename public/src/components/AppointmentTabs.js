import React from 'react'
import styles from "../stylesheets/AppointmentTabs.module.css"

function AppointmentTabs(props) {

    const appointments = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <div className={styles.container}>

            {
                appointments.map(elem => {
                    return <>
                        < div className={styles.reviews}>
                            <h2>Condition : {props.condition}</h2>
                            {props.isAppointed?<p>Date : {props.date}</p>:<p>Appointment Status : Pending</p>}
                            <p>Doctor : {props.doctorName}</p>
                        </div>
                    </>
                })
            }

        </div>
    )
}

export default AppointmentTabs
