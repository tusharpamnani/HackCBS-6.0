import React, { useState } from "react";
import {Link} from "react-router-dom"
import styles from "../stylesheets/Login.module.css"

const Register = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")


    const onButtonClick = () => {

        setEmailError("")
        setPasswordError("")

        if ("" === email) {
            setEmailError("Please enter your email")
            return
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError("Please enter a valid email")
            return
        }

        if ("" === password) {
            setPasswordError("Please enter a password")
            return
        }

        if (password.length < 7) {
            setPasswordError("The password must be 8 characters or longer")
            return
        }

    }

    return (
        <div className={styles.mainContainer} >

            <div>
                <div className={styles.titleContainer}>
                    <div><h2 className={styles.text}>Register</h2></div>
                </div>
                <br />
                <div className={styles.inputContainer}>
                    <input
                        value={email}
                        placeholder="Enter your email here"
                        onChange={ev => setEmail(ev.target.value)}
                        className={styles.inputBox} />
                    <label className={styles.errorLabel}>{emailError}</label>
                </div>
                <br />
                <br />
                <div className={styles.inputContainer}>
                    <input
                        value={password}
                        placeholder="Enter your password here"
                        onChange={ev => setPassword(ev.target.value)}
                        className={styles.inputBox} />
                    <label className={styles.errorLabel}>{passwordError}</label>
                </div>
                <br />
                <br />
                <div className={styles.inputContainer}>
                    <input
                        value={password}
                        placeholder="Enter your Age here"
                        onChange={ev => setPassword(ev.target.value)}
                        className={styles.inputBox} />
                    <label className={styles.errorLabel}>{passwordError}</label>
                </div>
                <br />
                <br />
                <div className={styles.inputContainer}>
                    <input
                        value={password}
                        placeholder="Enter your Gender here"
                        onChange={ev => setPassword(ev.target.value)}
                        className={styles.inputBox} />
                    <label className={styles.errorLabel}>{passwordError}</label>
                </div>
                <br />
                <br />
                <div className={styles.inputContainer}>
                    <button>Register</button>
                </div>
                <div className={styles.inputContainer}>
                    <Link to={"/login"} style={{margin:"10px"}} >Log into existing Account</Link>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Register