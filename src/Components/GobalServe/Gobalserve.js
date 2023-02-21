import {Grid,Box, Typography} from "@mui/material"


const GlobalServe = () => {
 


  return (
    <>
  <Box style={{width:"100%",paddingTop:"0px",background:"white",display:"flex",flexDirection:"column",backgroundColor:"white",}}>
 <Box style={{height:"20%",marginTop:"50px"}}>
    <Typography variant="h4" style={{color:"#2D3891",marginLeft:"20px",fontSize:"24px",textAlign:"center",lineHeight:"35px",fontWeight:"bold"}}>We Serve Across The Globe</Typography>
 </Box>
<Box style={{marginTop:"50px",height:"70%",width:"70%",margin:"auto",paddingTop:"50px",paddingBottom:"50px"}}>
<img src="gobalserve.png" style={{width:"100%",height:"100%",margin:"auto"}}/>
</Box>
</Box>
    </>
  );
};
export default GlobalServe;
