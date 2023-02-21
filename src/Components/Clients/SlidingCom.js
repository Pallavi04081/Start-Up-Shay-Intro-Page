import { Avatar } from "@mui/material";
import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Clientcard from "./ClientCard";
import AvatarCom from "./AvatarCom";
import "./Clients.css";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 2 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 }
];

function SlidingCom() {

    
  const QueryCard = [
    {image:"starts.png",  heading: "Bookkeeping",para:"Shivam & team provides an excellent solution for businesses seeking affordable and accurate financial information. His team is highly skilled, responsive, and always delivers outstanding results."},
    {image:"starts.png",  heading:"Shivam & team provides an excellent solution for businesses seeking affordable and accurate financial information. His team is highly skilled, responsive, and always delivers outstanding results."},
    {image:"starts.png",  heading: "Payroll Services",para:"Shivam & team provides an excellent solution for businesses seeking affordable and accurate financial information. His team is highly skilled, responsive, and always delivers outstanding results."},
    { image:"starts.png", heading: "Taxation",para:"Shivam & team provides an excellent solution for businesses seeking affordable and accurate financial information. His team is highly skilled, responsive, and always delivers outstanding results."},
  ];



  return (
    <div style={{width:"60%",margin:"auto",padding:"20px"}}>
      <hr className="seperator" />
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {QueryCard.map((item) => (
            <div style={{display:"flex",flexDirection:"column"}}>
           <div>
           <Clientcard ele={QueryCard[0]}/>
           </div>
           <div>
           <AvatarCom/>
           </div>
           </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default SlidingCom;

