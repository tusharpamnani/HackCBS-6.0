import React from 'react'
import style from "../stylesheets/PopUp.module.css"
import FilesDragAndDrop from './FileDragDrop'
import { RxCross1 } from "react-icons/rx";
function PopUP(props) {
  return (
    <div className={style.screen}>
      <div className={style.popUp}>
        <div className={style.head}>
          <h1>Transcribe Files</h1>
          <button onClick={props.setState}><RxCross1 style={{color:"black",height:"100%",width:"100%",zIndex:"20"}} /></button>
        </div>
        <div className={style.inputField}>
          <label htmlFor="language">Transcription Language</label>
          <select name="language" id="">
            <option value="">Default</option>
            <option value="">Options</option>
          </select>
        </div>
        <FilesDragAndDrop/>
        <div className={style.inputField}>
          <label htmlFor="importLink">Import From Link</label>
          <input name='importLink' type="text" />
        </div>
        <div className={style.checkBoxField}>
          <input name='checkBox' type="checkbox" />
          <label htmlFor="checkBox">Speaker Identification</label>
        </div>
        <button>Transcribe Files</button>
      </div>
    </div>
  )
}

export default PopUP
