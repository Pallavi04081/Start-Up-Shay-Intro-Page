import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function card({ele}) {
  return (
    <Card sx={{ maxWidth: 350,margin:"auto",background:"#EFEFFF"}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"18px",width:"100%",fontWeight:"600",textAlign:"center"}}>
          {ele.para}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{textAlign:"center"}}>
        Updates on safe shopping in our store
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ height: 240 }}
        image={ele.image}
        title="green iguana"
      />
    </Card>
  );
}
