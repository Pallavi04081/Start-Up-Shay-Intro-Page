import React from "react";
import { Navbar, Nav, Button } from 'rsuite';
import "rsuite/dist/rsuite.css";
import "./IntroCard.css";

const BusinessCard = () => (
  <>
  <div className="bussinessCardContainer" style={{background:"#EFF8FB"}}>
    <div className="bussincessCardBody">
      <h1 className="head">We heal the pain of your bookkeeping</h1>
      <p className="paragraph">
      We provide a wide range of financial services to help businesses of all sizes stay on top of their finances. We offer affordable bookkeeping and accounting services that are tailored to meet the specific needs of your business. Allowing you to focus on what matters the most i.e.
“Growing Your Business”
      </p>
      <div class="buttonContainer">
      <Button className="butn" appearance="ghost" style={{ color: "white",width:"200px",backgroundColor:"#5288F4" }}>Begin your free trial</Button>
      </div>
    </div>
    <div className="bussinessImageContainer">
           <img src="Group.png" class="BussinessImage"/>
    </div>
  </div>
  <div style={{width:"100%",background:"#EFF8FB"}}>
    <img src="Group2.png" style={{width:"100%"}}/>
  </div>
  </>
);
export default BusinessCard;
