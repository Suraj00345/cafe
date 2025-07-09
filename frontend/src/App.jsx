import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import OurService from "./Pages/OurService";
import ContactUs from "./Pages/ContactUs";
import Reservation from "./Pages/Reservation";
import Indian from "./Pages/Menu/IndianMenu";
import Chinese from "./Pages/Menu/ChineseMenu";
import Continental from "./Pages/Menu/ContinentalMenu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/indian" element={<Indian/>} />
        <Route path="/menu/continental" element={<Continental />} />
        <Route path="/menu/chinese" element={<Chinese />} />
        <Route path="/about" element={<About />} />
        <Route path="/our_service" element={<OurService />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </Router>
  );
}

export default App;
