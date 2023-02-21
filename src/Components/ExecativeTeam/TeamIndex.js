import {Grid,Box, Typography} from "@mui/material"
import TeamComp from "./Team";

const TeamIndex = () => {
 


  return (
    <>
  <Box style={{width:"100%",paddingTop:"100px",background:"white",display:"flex",flexDirection:"column",background:"url(Vector24.png)",backgroundPosition:"center",backgroundSize:"100%",backgroundRepeat:"no-repeat",backgroundColor:"white",}}>
 <Box style={{height:"20%",marginTop:"50px"}}>
    <Typography variant="h4" style={{color:"white",marginLeft:"20px",fontSize:"32px",textAlign:"center",lineHeight:"35px",fontWeight:"bold"}}>The Executive Team</Typography>
    <Typography style={{marginBottom:"20px",fontSize:"14px",marginLeft:"25px",textAlign:"center",width:"80%",margin:"auto",lineHeight:"50px",color:"white"}}>We bring a wealth of experience, innovation, and passion to the table and are eager to take on the challenge of creating something truly impactful.</Typography>
 </Box>
<Box style={{marginTop:"50px",height:"80%",width:"90%",margin:"auto"}}>
<TeamComp/>
</Box>
</Box>
    </>
  );
};
export default TeamIndex;
