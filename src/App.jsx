import { useEffect, useState } from "react";
import "./App.css";
import PreeOrder from "./Components/Alerts/PreeOrder";
import Landing from "./Components/Landings";
import TopBar from "./Components/Navbars/TopBar";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [Notif, SetNotif] = useState(true);

  function Timer() {
    var sec = 5;
    var timer = setInterval(() => {
      SetNotif(true);
      console.log("Memulai");
      sec--;
      if (sec < 0) {
        SetNotif(false);
        console.log("udah berhenti");
        clearInterval(timer);
      }
    }, 1000);
  }

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 0,
    });

    Timer();
  }, []);

  return (
    <>
      {Notif ? <PreeOrder /> : ""}
      <TopBar />
      <Landing />
    </>
  );
}

export default App;
