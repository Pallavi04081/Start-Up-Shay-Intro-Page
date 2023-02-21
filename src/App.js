import React from "react";
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Home from "./Pages/Home";
import AboutUS from "./Pages/AboutUS";
import ContactUs from "./Pages/Contact/ContactUs";
import NavBar from "./Components/Header/NavBar";
import Footer from "./Components/Footer/Footer";
import './App.css'




function App() {

  
  return (
    <div style={{background:"#E6E6FA"}}>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/aboutus" element={<AboutUS/>}></Route>
      <Route path="/contactus" element={<ContactUs/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;










