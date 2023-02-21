import {Box} from '@mui/material'
import FormCom from "../../Components/FormCom/Form";
import ContactInfo from "../../Components/ContactInfo/ContactInfo";
import Footer from '../../Components/Footer/Footer'
import "./Contact.css"

const ContactUs = ()=>{    
    return(
     <>
    <Box style={{backgroundColor:"white"}}>
    <Box style={{background:"url(backgroundimage.png)",height:"400px",backgroundSize:"cover",backgroundPosition:"center"}}></Box>
    <Box className="contactcontainer">
      <FormCom />
      <ContactInfo/>
    </Box>
     <Footer/>
     </Box>
     </>   
    )
    
    }
    
    export default ContactUs;