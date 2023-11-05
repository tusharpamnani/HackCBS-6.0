import React from 'react'
import styles from "../stylesheets/DoctorInfo.module.css"

function DoctorInfo() {

    const reviews = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <div className={styles.container}>

            {
                reviews.map(elem => {
                    return <>
                        < div className={styles.reviews}>
                            <h2>user {elem}</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempora possimus itaque quidem, illo accusantium ipsum, deleniti praesentium porro a saepe ducimus repellendus hic repellat maxime, blanditiis error consequatur perspiciatis architecto exercitationem quaerat! Consectetur odit quidem blanditiis voluptatum tempore suscipit?
                            </p>
                        </div>
                    </>
                })
            }

        </div>
    )
}

export default DoctorInfo
