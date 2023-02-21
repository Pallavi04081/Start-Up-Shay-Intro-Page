import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Companycard({ele}) {
  return (
    <Card sx={{ maxWidth: 350,margin:"auto",background:"white",borderRadius:"7px",borderTop:"4px solid #2D3891"}}>
      <CardMedia
        sx={{ height: 50,width:50,marginTop:"10px",margin:"20px",marginBottom:"10px" }}
        image={ele.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"16px",width:"100%",fontWeight:"600",color:"#292525"}}>
          {ele.heading}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{textAlign:"justify",fontSize:"12px",lineHeight:"24px"}}>
         {ele.para}
        </Typography>
      </CardContent>
    </Card>
  );
}
