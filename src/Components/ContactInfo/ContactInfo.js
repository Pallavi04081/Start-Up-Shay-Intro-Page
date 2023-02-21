import { useState } from "react";
import {Box,Button,TextareaAutosize,TextField, Typography,Select,InputLabel,MenuItem,FormControl} from "@mui/material"
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Contactinfo.css"

const ContactInfo = ()=>{
   
   return(
    <>
     <Box class="contactContainer">
        <Box>
        <Typography class="Contactinfoheading" variant="h3" component="h4">
        Contact Information
        </Typography>
        </Box>
        <Box>
            <Box>
                <Box className="Textconainer">
                <Typography className="" style={{margin:"25px 0px",}}><PhoneInTalkIcon style={{marginRight:"20px"}}/>+91 (123-456-789)</Typography>
                </Box>
                <Box>
                <Typography style={{margin:"0px 0xp 25px 0px",}}><AttachEmailIcon style={{marginRight:"20px"}}/> For Sales: ompanysales@gmail.com</Typography>
                </Box>
                <Box>
                <Typography style={{margin:"25px",marginLeft:"45px",}}>Career: hrofficial@gmail.com</Typography>
                    </Box>
                    <Box>
                    <Typography style={{margin:"25px",marginLeft:"45px",}}>General Enquiries: companyofficial@gmail.com</Typography>
                    </Box>
                    <Box>
                    <Typography style={{marginBottom:"25px",}}><FmdGoodIcon style={{marginRight:"20px",}}/>  Block 2 Sector 2 New delhi</Typography>
                    </Box>              
            </Box>
            <Box style={{marginBottom:"25px",marginLeft:"45px"}}>
                <FacebookIcon style={{fontSize:"40px",marginRight:"5px",color:"white"}}/>
                <InstagramIcon style={{fontSize:"40px",marginRight:"5px",color:"white"}}/>
                <TwitterIcon style={{fontSize:"40px",marginRight:"5px",color:"white"}}/>
                <YouTubeIcon style={{fontSize:"40px",marginRight:"5px",color:"white"}}/>
            </Box>
            <Box class="iframe">
                <Typography style={{marginBottom:"25px",marginLeft:"45px",}}>Locate Us On Map</Typography>
                <iframe width="100%" height="200" src="https://maps.google.com/maps?width=100%& amp;height=600& amp;hl=en& amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" style={{borderRadius:"25px"}}>
               </iframe>
        </Box>
     </Box>
     </Box>
    </>
   )

}

export default ContactInfo