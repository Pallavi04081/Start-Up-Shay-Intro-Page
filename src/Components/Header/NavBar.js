import React from 'react'
import { Navbar, Nav, Button } from 'rsuite';
import TemporaryDrawer from '../Drawer/Drawer';
import {Link} from 'react-router-dom'
import './NavBar.css'



function NavBar() {
  return (
    <Navbar style={{background:"#EFF8FB",width:"100%"}}>
    <Nav style={{display:"flex",flexDirection:"row",width:"100%",paddingTop:"20px",paddingBottom:"20px"}}>
    <Navbar.Brand  className="ImageContainer">
      <img src="Slogo.png" className='imgCont' style={{width:"100px"}}/>
    </Navbar.Brand>
    <Nav className="ComponentContainer" style={{padding:"auto"}}>
      <Navbar.Brand  style={{fontSize:"12px",display:"flex",justifyContent:"flex-end",fontWeight:"bold",marginTop:"10px"}}><Link to="/" style={{color:"black",textDecoration:"none"}}>Home</Link></Navbar.Brand >
      <Navbar.Brand  style={{color:"black",fontSize:"12px",display:"flex",justifyContent:"flex-end",fontWeight:"bold",marginTop:"10px"}}><Link to="/aboutus" style={{color:"black",textDecoration:"none"}}>About us</Link></Navbar.Brand >
      <Navbar.Brand  style={{color:"black",fontSize:"12px",display:"flex",justifyContent:"flex-end",fontWeight:"bold",marginTop:"10px"}}><Link to="/aboutus" style={{color:"black",textDecoration:"none"}}>Service</Link></Navbar.Brand >
      <Navbar.Brand  style={{color:"black",fontSize:"12px",display:"flex",justifyContent:"flex-end",fontWeight:"bold",marginTop:"10px"}}><Link to="/Contactus" style={{color:"black",textDecoration:"none"}}>Contact us</Link></Navbar.Brand >
    </Nav>
    <Nav className='ButtonContainer'>
    <Navbar.Brand  style={{color:"#6D44BC",fontSize:"14px",display:"flex",justifyContent:"center",fontWeight:"bold",height:"100%",paddingLeft:"0px",paddingRight:"0px",width:"70%"}}><a style={{width:"100%"}} href="#" target={'_blank'}><Button appearance="ghost" style={{width:"100%",color:"white",fontWeight:"bold",height:"100%",background:"#5288F4",fontSize:"10px"}}>book a free consulation</Button></a></Navbar.Brand>
    </Nav>
    <Nav className="DrawerComponent">
      <TemporaryDrawer/>
    </Nav>
    </Nav>
  </Navbar>
  
    
  )
}

export default NavBar