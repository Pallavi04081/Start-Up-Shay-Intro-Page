import React from "react";
import { Navbar, Nav, Button,Avatar } from 'rsuite';
import "rsuite/dist/rsuite.css";
import "./OurStory.css";

const StoryCard = () => (
  <div style={{width:"100%",paddingLeft:"0px",paddingRight:"0px",backgroundColor:"#EFF8FB"}}>
  <div className="StorymainContainer">
  <div className="StoryCardContainer">
    <div className="StoryCardBody">
      <h1 className="Storyhead">About Us</h1>
      <p className="Storyparagraph">
      We are a young and passionate firm offering an array of bookkeeping, accounting and taxation services to help small and mid scale businesses   build a solid financial foundation upon which to grow your business.
      </p>
      <p className="Storyparagraph">We understand the importance of accurate and timely financial information that is why it is our mission to provide you with the highest quality of services at affordable price</p>
      <p className="Storyparagraph">We strongly believe in working with our client collaboratively and ensuring that they require minimal intervention/supervision</p>
    </div>
    <div className="StoryImageContainer">
         <img src="Aboutus.png" style={{width:"80%",height:"90%",margin:"auto",float:"right"}}/>
    </div>
  </div>
  </div>
  </div>
);
export default StoryCard;
