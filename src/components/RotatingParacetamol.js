import React, { useRef } from 'react'
import styles from "../stylesheets/RotatingParacetamol.module.css"

function RotatingParacetamol(props) {

  return (
    <div style={{height:props.height||"100%",width:props.width||"100%"}} className={styles.container}>
      <div className={styles.circle}>
        <div className={styles.innerCircle}>
            <hr />
        </div>
      </div>
    </div>
  )
}

export default RotatingParacetamol
