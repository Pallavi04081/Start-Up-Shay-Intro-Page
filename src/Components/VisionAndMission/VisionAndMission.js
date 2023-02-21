import {Grid,Box, Typography} from "@mui/material"
import VisionCard from "./VisionCard";

const VisionCardCom = () => {
  const QueryCard = [
    {image:"vision.png",  heading: "Our Vision",para:"Our vision is to disrupt the accounting industry by utilizing progressive technology and delivering personalized, efficient, and transparent solutions that empower businesses to grow and succeed."},
    {image:"mision.png",  heading: "Our Mission",para:"Our mission is to provide innovative, reliable, and ethical accounting services to small and medium-sized businesses, while creating a culture of integrity, growth, and satisfaction for our stakeholders"},
  ];


  return (
    <>
  <Box style={{width:"100%",paddingTop:"10px",background:"white",display:"flex",flexDirection:"column"}}>
    
<Box style={{marginTop:"10px",height:"80%"}}>
{/* <img src="Vector12.png" style={{width:"100%",position:"relative",zIndex:0,height:"40vh",top:"200px"}}/> */}
<Grid container spacing={5} rowGap={2} sx={{width:"90%",margin:"auto",paddingBottom:"50px"}}>
{QueryCard.map((ele) => {
          return (
            <>
            <Grid item xs={12} sm={6} md={6}>
              <VisionCard ele={ele} />
            </Grid>
            </>
          );
        })}
</Grid>
</Box>
</Box>
    </>
  );
};
export default VisionCardCom;
