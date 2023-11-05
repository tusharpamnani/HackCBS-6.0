import React from 'react'
import styles from "./stylesheets/App.module.css"
// import Header from './components/Header'
// import HeadingSection from './components/HeadingSection'
// import FileInfoBar from './components/FileInfoBar'
// import CheckHolder from './components/CheckHolder'
// import { HiRocketLaunch, HiHome, HiOutlineFolder, HiOutlineBookmark } from "react-icons/hi2";
// import { FaRegQuestionCircle } from "react-icons/fa";
// import { HiShare, HiTrash } from 'react-icons/hi'
// import { PiGearBold } from 'react-icons/pi'
// import PopUP from './components/PopUP'
// import Animation from './components/Animation'
import SignupForm from './components/SignupForm'
function App() {

  // const [transcribe, setTranscribe] = useState(false)
  // const [tab,setTabs] = useState(1)
  // const setState = (e) => {
  //   setTranscribe(!transcribe)
  // }

  // const setTab=(elem)=>{
  //   setTabs(elem)
  // }

  return (
    <>
      {/* {transcribe && <PopUP setState = {setState} />}
      <div className={styles.App} >
        <div className={styles.tabSection}>
          <div className={styles.section}>
            <h1>ABC Firm</h1>
            <div  className={styles.container}>
              <div className={styles.icon}>
                <HiHome />
              </div>
              <button onClick={()=>{setTab(1)}} disabled = {tab === 1} className={styles.options}>Home</button>
            </div>
            <div className={styles.container}>
              <div className={styles.icon}>
                <HiOutlineFolder />
              </div>
              <button onClick={()=>{setTab(2)}} disabled = {tab === 2} name='All Files' className={styles.options}>All Files</button>
            </div>
            <div className={styles.container}>
              <div className={styles.icon}>
                <HiOutlineBookmark />
              </div>
              <button onClick={()=>{setTab(3)}} disabled = {tab === 3} name='Saved' className={styles.options}>Saved</button>
            </div>
            <div className={styles.container}>
              <div className={styles.icon}>
                <HiShare />
              </div>
              <button onClick={()=>{setTab(4)}} disabled = {tab === 4} name='Integrations' className={styles.options}>Integrations</button>
            </div>

            <div className={styles.container}>
              <div className={styles.icon}>
                <HiTrash />
              </div>
              <button onClick={()=>{setTab(5)}} disabled = {tab === 5} name='Trash' className={styles.options}>Trash</button>
            </div>
            <div className={styles.container}>
              <div className={styles.icon}>
                <PiGearBold />
              </div>
              <button onClick={()=>{setTab(6)}} disabled = {tab === 6} name='Settings' className={styles.options}>Settings</button>
            </div>
            <div className={styles.container}>
              <div className={styles.icon}>
                <FaRegQuestionCircle />
              </div>
              <button onClick={()=>{setTab(7)}} disabled = {tab === 7}  name='Help And Support' className={styles.options}>Help And Support</button>
            </div>
          </div>
          <div className={styles.promotion}>
            <div  ><HiRocketLaunch /></div>
            <h3>Upgrade Account</h3>
            <p>Access To Unlimited Transcription</p>
            <button onClick={() => { }} >Upgrade</button>
          </div>
        </div>
        <div className={styles.rightSection}>
          <Header />
          <HeadingSection setState = {setState} />
          <FileInfoBar />
          <CheckHolder />
        </div>
      </div> */}
      {/* <div className={styles.tempHolder}>
        <Animation/>
      </div> */}
      <div className={styles.App}>
      <SignupForm/>
      </div>
    </>
  )
}

export default App
