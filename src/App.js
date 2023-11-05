import styles from  "./stylesheets/App.module.css"
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import AppointmentList from "./pages/AppointmentList";
import AppointmentForm from "./components/AppointmentForm";


function App() {
  return (
    <div className={styles.App}>
      <div className={styles.container}></div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/s" element = {<Homepage height = {"200px"} width = {"200px"}/>} />
          <Route path="/" element = {<AppointmentForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
