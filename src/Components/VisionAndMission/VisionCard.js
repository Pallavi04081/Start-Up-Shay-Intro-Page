import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function VisionCard({ele}) {
  return (
    <Card sx={{ maxWidth: "80%",margin:"auto",background:"white",padding:"10px",boxShadow:"none"}}>
      <CardMedia
        sx={{ height: 100,width:100,marginTop:"10px",margin:"20px",marginBottom:"10px",margin:"auto",padding:"10px" }}
        image={ele.image}
        title="green iguana"
      />
      <CardContent style={{padding:"0px"}}>
        <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"22px",width:"100%",fontWeight:"600",color:"#2D3891",textAlign:"center"}}>
          {ele.heading}
        </Typography>
        <div style={{widdth:"100%",background:"#EFF8FB",borderRadius:"7px"}}>
        <Typography variant="body2" color="text.secondary" sx={{width:"80%",textAlign:"center",fontSize:"12px",lineHeight:"24px",margin:"auto",padding:"10px"}}>
         {ele.para}
        </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
