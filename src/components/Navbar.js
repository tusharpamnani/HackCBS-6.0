import React, { useRef, useState } from 'react'
import styles from "../stylesheets/Navbar.module.css"
import { Link } from 'react-router-dom'
function Navbar() {

    const buttonRef = useRef()
    const [show, setShow] = useState(false)

    const toggleNav = () => {
        const button = buttonRef.current
        console.log(button.classList)
        if (show) {
            button.classList.remove(styles.cross)
            setShow(false)
        } else {
            button.classList.add(styles.cross)
            setShow(true)
        }
    }

    return (
        <>
            <div className={styles.body}>
                <div className={styles.logo}>
                    BrandName
                </div>
                <div ref={buttonRef} onClick={toggleNav} className={`${styles.menuButton}`}>
                    <hr />
                    <hr />
                    <hr />
                </div>
            </div>
            {show && <div className={styles.navContainer}>
                <div className={styles.tab}>
                    <div className={styles.icon}>
                        <img src="" alt="" />
                    </div>
                    <p>Home</p>
                </div>
            </div>}
        </>
    )
}

export default Navbar
