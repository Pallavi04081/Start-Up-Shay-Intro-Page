
import "./OfferCard.css";
// import './CraditCard.png'


import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Button} from '@mui/material'
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function OfferCard() {
  const theme = useTheme();

  return (

    <div className="cardContainer" style={{width:"calc(100% - 20px)",boxSizing:"border-box",marginLeft:"20px",paddingLeft:"6%",paddingRight:"6%"}}>
      <div className="paracontainer" >
      <h1 className="Heading">Get 5% Cash back </h1>
      <p className="p">on localville.in</p> 
      <div>
        <button type="button" className="Button">
          <p className="ButtonFont">Learn More</p>
        </button>
      </div>
      </div>
      <div className="imageContainer">
       <img src='CraditCard.png' style={{width:"60%",marginTop:"10px",height:"80%"}}></img>
       </div>
    </div>










    // <Card sx={{width:"100%", display: 'flex'}} >
    //   <Box sx={{ width:"50%",display: 'flex', flexDirection: 'column' }}>
    //     <CardContent sx={{ flex: '1 0 auto',}}>
    //       <Typography component="div" variant="h5" sx={{fontSize:"35px",fontWeight:"bolder"}}>
    //       Get 5% Cash back 
    //       </Typography>
    //       <Typography variant="subtitle1" component="div" className="p">
    //       on localville.in
    //       </Typography>
    //       <Button variant="contained" sx={{background: "#6D44BC",position:"relative",left:"50px",top:"30px",borderRadius:"40px",width: "190px",height:"49px"}}  >Learn More</Button>
    //     </CardContent>
    //   </Box>
    //   <Box sx={{width:"50%"}}  class="imageContainer">
    //   <CardMedia
    //     component="img"
    //     sx={{ width: 250}}
    //     image="CraditCard.png"
    //     alt="Live from space album cover"
    //   />
    //   </Box>
    // </Card>

    




  );
}









// function OfferCard() {
//   return (
//     
//   );
// }

// export default OfferCard;



