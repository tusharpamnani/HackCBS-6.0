import React, { useState } from "react";
import {Link} from "react-router-dom"
import styles from "../stylesheets/Login.module.css"
import {useDispatch} from "react-redux"

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const dispatch = useDispatch()

    const handleChange = ()=>{
        
    }

    const onButtonClick = () => {
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
                    <div><h2 className={styles.text}>Login</h2></div>
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
                        name=""
                        value={password}
                        placeholder="Enter your password here"
                        onChange={handleChange}
                        className={styles.inputBox} />
                    <label className={styles.errorLabel}>{passwordError}</label>
                </div>
                <br />
                <br />
                <div className={styles.inputContainer}>
                    <button>Login</button>
                </div>
                <div className={styles.inputContainer}>
                    <Link to={"/register"} style={{margin:"10px"}} >Create New Account</Link>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Login