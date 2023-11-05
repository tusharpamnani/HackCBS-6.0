import React, { useEffect, useRef } from 'react'
import styles from "../stylesheets/Homepage.module.css"
import gsap from 'gsap'
import doctor from "../assets/images-removebg-preview.png"
import sticker from "../assets/WhatsApp_Image_2023-11-04_at_23.05.46_e5fc24d7-removebg-preview.png"
import RotatingParacetamol from '../components/RotatingParacetamol'
import {Link} from "react-router-dom"
function Homepage() {

  const triangle1Ref = useRef()
  const triangle2Ref = useRef()

  useEffect(() => {
    gsap.fromTo(triangle2Ref.current, {
      transform: "translateX(-1000px)",
    }, {
      transform: "translateX(0px)",
      rotate: "53deg",
      duration: 1,
    })
    gsap.fromTo(triangle1Ref.current, {
      transform: "translateX(-1000px)",
    }, {
      transform: "translateX(0px)",
      rotate: "53deg",
      duration: 1
    })
  }, [])


  return (
    <div className={styles.screen} >
      <div className={styles.background}>
        <div ref={triangle1Ref} className={styles.triangle1}></div>
        <div ref={triangle2Ref} className={styles.triangle2}></div>
        <img src={sticker} className={styles.sticker}></img>
      </div>
      <div className={styles.container}>
        <div className={styles.text}>
          <div className={styles.heading}>
            <h1>Welc</h1>
            <RotatingParacetamol/>
            <h1>me</h1>
          </div>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className={styles.buttonBox}>
            <button>Register</button>
            <button><Link to={"/login"}>Login</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
