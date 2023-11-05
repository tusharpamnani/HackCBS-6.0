import React from 'react'
import styles from "../stylesheets/CheckHolder.module.css"

function CheckHolder() {

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
            <h1>Recent Files</h1>
            <hr />
            <div className={styles.holder}>
                <input type="checkbox" style={{opacity:"0"}} name="" id="" />
                <p>Name</p>
                <p>Type</p>
                <p>Duration</p>
                <p>Date Created</p>
                <p>Last Updated</p>
                <p>Action</p>
            </div>
            {

                data.map(el => {
                    return <>
                        <div className={styles.holder}>
                            <input type="checkbox" name="" id="" />
                            <p>{el.Name}</p>
                            <p>{el.FileType}</p>
                            <p>{el.Duration}</p>
                            <p>{el.DateCreated}</p>
                            <p>{el.LastUpdated}</p>
                            <p></p>
                        </div>
                    </>
                })
            }
        </div>
    )
}

export default CheckHolder
