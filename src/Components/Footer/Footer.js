import React from "react";
import FooterCard from "./FooterCard";
import "./Footer.css";



function Footer() {
  return (
    <div>
      <div style={{width:"100%",background:"#2D3891",color:"white"}}>
        <div className="FooterContainer">
        <div className="logoContainer">
          <div>
          <img class="imageLogo" src="Grouplogo.png"></img>
          </div>
        </div>
         <div className="footerComponent">
         <div style={{width:"33.33%"}}>
          <p className="cartpara01" style={{textAlign:"justify"}}>Registered Office: Book Healers LLP</p>
          <p className="cartpara01" style={{textAlign:"justify"}}>+91-7988089225</p>
          <p className="cartpara01" style={{textAlign:"justify"}}>info@bookhealers.com</p>
          </div>
        <div className="cart1" style={{width:"33.33%"}}>
         <p className="cartpara01">Navigation</p> 
         <p className="cartpara01">Home</p> 
         <p className="cartpara01">Abous us</p> 
         <p className="cartpara01">Services</p> 
         <p className="cartpara01">Contact us</p> 

        </div>
        <div className="cart1" style={{width:"33.33%"}}>
          <p className="cartpara01">Follow us</p>
          <p className="cartpara01">Darl</p>
          <p className="cartpara01">Light</p>
        </div>
        </div>
        </div>
      </div>
      <div className="endbottom">
          <p style={{width:"25%",fontSize:"12px",textAlign:"center",marginTop:"8px"}}>
          @2023 Copyright:Bookhealers
          </p>
          <p style={{width:"25%",fontSize:"12px",textAlign:"center"}}>
          Designed & Developed by Incscale Technologies 
          </p>
          <p style={{width:"25%",fontSize:"12px",textAlign:"center"}}>
          Privacy policy
          </p>
          <p style={{width:"25%",fontSize:"12px",textAlign:"center"}}>
          Terms and Conditions
          </p>
        </div>
    </div>
  );
}

export default Footer;
