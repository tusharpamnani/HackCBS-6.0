import styles from  "./stylesheets/App.module.css"
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import AppointmentForm from "./components/AppointmentForm";
import DoctorDashboard from "./pages/DoctorDashboard";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  return (
    <div className={styles.App}>
      <div className={styles.container}></div>
      
      <BrowserRouter basename="/">
      <Navbar/>
        <Routes>
          <Route exact path="/" element = {<Homepage height = {"200px"} width = {"200px"}/>} />
          <Route path="/appointmentform" element = {<AppointmentForm/>}/>
          <Route path="/dashboard" element = {<DoctorDashboard status = {""}/>}/>
          <Route path="/login" element = {<Login status = {""}/>}/>
          <Route path="/register" element = {<Register status = {""}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
