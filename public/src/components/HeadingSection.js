import React from 'react'
import styles from "../stylesheets/HeadingSection.module.css"
function HeadingSection(props) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>Welcome Shakirat</h1>
        <p>Upload Your audio and Video to Convert to Text</p>
      </div>
      <div className={styles.right}>
        <button className={styles.transScribeButton} onClick={props.setState} >Transcribe File</button>
      </div>
    </div>
  )
}

export default HeadingSection
