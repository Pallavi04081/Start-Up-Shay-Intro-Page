import {Grid,Box, Typography} from "@mui/material"
import TeamComp from "./Team";
import "./Team.css"

const TeamIndex = () => {
 


  return (
    <>
  <Box style={{width:"100%",paddingTop:"100px",background:"white",display:"flex",flexDirection:"column",background:"url(Vector24.png)",backgroundPosition:"center",backgroundSize:"100%",backgroundRepeat:"no-repeat",backgroundColor:"white",}}>
 <Box style={{height:"20%",marginTop:"50px"}}>
    <Typography class="teamIndexHead" variant="h4">The Executive Team</Typography>
    <Typography class="teamIndexpara">We bring a wealth of experience, innovation, and passion to the table and are eager to take on the challenge of creating something truly impactful.</Typography>
 </Box>
<Box style={{marginTop:"50px",height:"80%",width:"90%",margin:"auto"}}>
<TeamComp/>
</Box>
</Box>
    </>
  );
};
export default TeamIndex;
