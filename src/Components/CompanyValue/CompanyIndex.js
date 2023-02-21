import CompanyCard from "./CompanyCard";
import {Grid,Box, Typography} from "@mui/material"

const CompanyIndex = () => {
  const QueryCard = [
    {image:"banking.png",  heading: "Bookkeeping",para:"We ensure all your accounting and financial information is kept up-to-date and accurate, so you can concentrate on your business."},
    {image:"Accounting.png",  heading: "Senior Accounting",para:"We deep dive into your books to provide a clear picture of where you are and what we need to do to achieve your goals."},
    {image:"services.png",  heading: "Payroll Services",para:"Managing and Processing payroll is not only tedious but a time-consuming process with low rewards. Let us help you with this"},
    { image:"Taxation.png", heading: "Taxation",para:"We understand the importance of accurate financial records and staying compliant with tax laws, and we take that responsibility very seriously." },
  ];


  return (
    <>
  <Box style={{width:"100%",paddingTop:"100px",background:"white",display:"flex",flexDirection:"column"}}>
 <Box style={{height:"20%"}}>
    <Typography variant="h4" style={{color:"#2D3891",marginLeft:"20px",fontSize:"32px",textAlign:"center",lineHeight:"56px",fontWeight:"500"}}>Our Services</Typography>
    <Typography style={{marginTop:"24px",fontSize:"14px",marginLeft:"25px",textAlign:"center",width:"80%",margin:"auto",lineHeight:"37px"}}>Book-Healers provides a wide range of financial services to help businesses of all sizes stay on top of their finances.</Typography>
 </Box>
<Box style={{marginTop:"50px",height:"80%",background:"url(Vector12.png)",backgroundSize:"100%"}}>
{/* <img src="Vector12.png" style={{width:"100%",position:"relative",zIndex:0,height:"40vh",top:"200px"}}/> */}
<Grid container spacing={2} rowGap={2} sx={{width:"70%",margin:"auto",paddingLeft:"6%",paddingRight:"6%",paddingBottom:"50px"}}>
{QueryCard.map((ele) => {
          return (
            <>
            <Grid item xs={12} sm={6} md={6}>
              <CompanyCard ele={ele} />
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
export default CompanyIndex;
