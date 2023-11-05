
import React from 'react'
import styles from "../stylesheets/ListHolder.module.css"
import {useDispatch} from "react-redux"
import { changeDetails } from '../reducers/UserDataSlice'

function ListHolder() {

    const dispatch = useDispatch()

    const renderDetails = (e)=>{
        dispatch({
            type:`${changeDetails}`,
            payload:{
                name:e.target.name,
                value:e.target.value
            }
        })
    }

    const data = [
        {
            "Name": "Audio1",
            "FileType": "audio",
            "Duration": 5,
            "DateCreated": "2023-10-15",
            "LastUpdated": "2023-10-20"
        },
        {
            "Name": "SML10025_1",
            "FileType": "SML10025",
            "Duration": 8,
            "DateCreated": "2023-09-25",
            "LastUpdated": "2023-09-25"
        },
        {
            "Name": "Video1",
            "FileType": "MP4",
            "Duration": 60,
            "DateCreated": "2023-08-10",
            "LastUpdated": "2023-10-30"
        },
        {
            "Name": "Audio2",
            "FileType": "audio",
            "Duration": 15,
            "DateCreated": "2023-07-05",
            "LastUpdated": "2023-10-31"
        },
        {
            "Name": "SML10025_2",
            "FileType": "SML10025",
            "Duration": 12,
            "DateCreated": "2023-10-01",
            "LastUpdated": "2023-10-01"
        },
        {
            "Name": "Video2",
            "FileType": "AVI",
            "Duration": 45,
            "DateCreated": "2023-08-20",
            "LastUpdated": "2023-10-29"
        },
        {
            "Name": "Audio3",
            "FileType": "audio",
            "Duration": 30,
            "DateCreated": "2023-10-10",
            "LastUpdated": "2023-10-10"
        },
        {
            "Name": "SML10025_3",
            "FileType": "SML10025",
            "Duration": 10,
            "DateCreated": "2023-10-02",
            "LastUpdated": "2023-10-02"
        },
        {
            "Name": "Video3",
            "FileType": "MKV",
            "Duration": 25,
            "DateCreated": "2023-08-15",
            "LastUpdated": "2023-10-25"
        },
        {
            "Name": "Audio4",
            "FileType": "audio",
            "Duration": 40,
            "DateCreated": "2023-09-15",
            "LastUpdated": "2023-09-15"
        }
    ]

    return (
        <div className={styles.container}>
            <h1>Your Medical History</h1>
            <hr />
            <div className={styles.holder}>
                    <input type="checkbox" style={{ opacity: "0" }} name="" id="" />
                    <p>Doctor</p>
                    <p>Condition</p>
                    <p>Hospital</p>
                    <p>Date</p>
                    <p>Next Date</p>
                    <p></p>
                </div>
            <div className={styles.listHolder}>
                
                {

                    data.map(el => {
                        return <>
                            <div className={styles.holder}>
                                <input style={{opacity:"0"}} type="checkbox" name="" id="" />
                                <p>{el.Name}</p>
                                <p>{el.FileType}</p>
                                <p>{el.Duration}</p>
                                <p>{el.DateCreated}</p>
                                <p>{el.LastUpdated}</p>
                                <p><button key={el} onClick={renderDetails}>Get Details</button></p>
                            </div>
                        </>
                    })
                }
            </div>
        </div>
    )
}

export default ListHolder
