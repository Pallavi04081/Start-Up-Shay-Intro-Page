import {Grid,Box, Typography} from "@mui/material"
import SlidingCom from "./SlidingCom"



const Client = ()=>{

 return(
    <>   
    <Box style={{width:"100%",paddingTop:"100px",background:"white",display:"flex",flexDirection:"column"}}>
 <Box style={{height:"20%"}}>
    <Typography variant="h4" style={{color:"#2D3891",marginLeft:"20px",fontSize:"32px",textAlign:"center",lineHeight:"56px",fontWeight:"bold"}}>Our Happy Clients</Typography>
 </Box>
<Box style={{marginTop:"0px",height:"80%"}}>
 <SlidingCom/>
</Box>
</Box>
    </>
 )


}

export default Client;
