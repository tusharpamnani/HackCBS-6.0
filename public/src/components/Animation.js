import React, { useEffect, useState } from 'react'
import styles from '../stylesheets/Animation.module.css'
function Animation() {


    const [style,setStyle] = useState(styles.animation2)
    useEffect(()=>{
        setTimeout(() => {
            setStyle(styles.animation1)
        }, 2500);
    },[])

    return (
        <div className={styles.container}>
            <div className={`${styles.circle} ${style} `}>
                <div className={`${styles.circle} ${style} `}>
                    <div className={`${styles.circle} ${style} `}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Animation
