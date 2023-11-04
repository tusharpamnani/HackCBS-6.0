import styles from  "./stylesheets/App.module.css"
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Payment from "./components/Payment";
import RotatingParacetamol from "./components/RotatingParacetamol";
import AppointmentList from "./pages/AppointmentList";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.container}></div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/temp" element = {<Homepage height = {"200px"} width = {"200px"}/>} />
          <Route path="/" element = {<AppointmentList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
