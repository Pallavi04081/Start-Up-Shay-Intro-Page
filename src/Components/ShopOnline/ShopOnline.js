import React from "react";
import { Navbar, Nav, Button,Avatar,Grid} from 'rsuite';
import "rsuite/dist/rsuite.css";
// import Capablitycard from "./CapablityCard";
import GridCardCom from "./GridCardCom";
import "./ShopOnline.css";

const ShopOnline = () => {

 

  return(
    <>
      <div className="ShoppingmainContainer" style={{background:"white",display:"flex",flexDirection:"row"}}>
        <div style={{width:"12%",paddingRight:"10px",height:"70%",boxSizing:"border-box",marginTop:"50px"}}>
          <img src="Group4.png"/>
        </div>
     <div className="ShopingCardContainer">
    <div className="ShopingCardBody">
      <h1 className="Shopinghead">Our Capabilities</h1>
      <p className="Shopingparagraph">
      We are the ideal choice for your bookkeeping needs.
      </p>
    </div>
    <div className="ShopingImageContainer">
      <GridCardCom/>
    </div>
  </div>
  </div>
    </>
  )

};


export default ShopOnline;
