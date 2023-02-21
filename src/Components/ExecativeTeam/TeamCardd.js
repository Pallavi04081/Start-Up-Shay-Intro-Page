import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Teamcard({ele}) {
  return (
    <Card sx={{ maxWidth: "90%",margin:"auto",background:"white",borderRadius:"7px",display:"flex",flexDirection:"row"}}>
      <CardContent style={{width:"70%",paddingBottom:"30px"}}>
        <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"14px",width:"100%",fontWeight:"600",color:"#292525"}}>
          {ele.heading}
        </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"10px",width:"100%",color:"#2D3891",fontWeight:"bold"}}>
          {ele.subheading}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{textAlign:"justify",fontSize:"12px",lineHeight:"24px"}}>
         {ele.para}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ height: 100,width:100,margin:"20px",marginBottom:"10px" }}
        image={ele.image}
        title="green iguana"
      />
    </Card>
  );
}
