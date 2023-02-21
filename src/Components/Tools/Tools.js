import React from "react";
import { Navbar, Nav, Button,Avatar,Grid} from 'rsuite';
import "rsuite/dist/rsuite.css";
import "./Tool.css";

const Tools = () => {

 

  return(
    <>
      <div className="ShoppingmainContainer" style={{background:"white",display:"flex",flexDirection:"row"}}>
        <div style={{width:"12%",paddingRight:"10px",height:"70%",boxSizing:"border-box",marginTop:"50px"}}>
          <img src="Group4.png"/>
        </div>
     <div className="ShopingCardContainer">
    <div className="ShopingCardBody">
      <h1 className="Shopinghead">Tools that simplify our work</h1>
      <p className="Shopingparagraph">
      We use the best in class tools to ensure best quality work and keep things on track.
      </p>
    </div>
    <div className="ShopingImageContainer">
    <img src="tools.png" style={{width:"100%",height:"90%",marginTop:"-5px",marginLeft:"-5px",float:"right"}}/>
    </div>
  </div>
  </div>
    </>
  )

};


export default Tools;
