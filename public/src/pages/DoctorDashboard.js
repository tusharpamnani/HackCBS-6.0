import React, { useState } from 'react'
import styles from "../stylesheets/DoctorDashboard.module.css"
import HeadingSection from '../components/HeadingSection'
import FileInfoBar from '../components/FileInfoBar'
import PopUP from '../components/PopUP'
import DoctorInfo from '../components/DoctorInfo'
import AppointmentTabs from '../components/AppointmentTabs'

function DoctorDashboard(props) {

    const [transcribe, setTranscribe] = useState(false)
    const [tab, setTabs] = useState(1)
    const setState = (e) => {
        setTranscribe(!transcribe)
    }

    const setTab = (elem) => {
        setTabs(elem)
    }

    return (
        <div>
            {transcribe && <PopUP setState={setState} />}
            <div className={styles.App} >
                <div className={styles.tabSection}>
                    <div className={styles.promotion}>
                        <img src="data:image/jpeg;base64,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" alt="" />
                        <div className={styles.contactData}>
                            <h1>Dr Strange</h1>
                            <h3>Contact Details</h3>
                            <p>Phone : +91 898984343</p>
                            <p>Email : doctorstrange@gmail.com</p>
                            <p>Speciality : Cardiac Problems</p>
                            <p>Address : near some building , at a town , Dehli</p>
                        </div>
                    </div>
                </div>
                <div className={styles.rightSection}>
                    <br />
                    <br />
                    <br /><br /><br />
                    <HeadingSection setState={setState} />
                    {props.status === "doctor"?<FileInfoBar />:<div style={{height:"27vh",color:"white",
                display:"flex","alignItems":"center",justifyContent:"center"}}>
                        <h1 style={{fontSize:"50px"}}>Get The Best Doctors nearby with just a click </h1>
                        </div>}
                    <hr />

                    {props.status === "doctor" ? <>
                        <h1 className={styles.review}>Reviews</h1><DoctorInfo/></>
                        : <><h1 className={styles.review}>Your Appointments</h1><AppointmentTabs/></>}
                </div>
            </div>
        </div>
    )
}

export default DoctorDashboard
