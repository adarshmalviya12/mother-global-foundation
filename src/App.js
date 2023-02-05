import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

import Home from "./Pages/Home"
import AboutUs from "./Pages/AboutUs"
import Gallary from "./Pages/Gallary"
import OurDonars from "./Pages/OurDonars"
import Contact from "./Pages/ContactUs"
import './App.css';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallary' element={<Gallary />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/donar' element={<OurDonars />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
