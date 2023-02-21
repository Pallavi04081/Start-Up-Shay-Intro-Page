import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Capablitycard({ele}) {
  return (
    <Card sx={{ maxWidth: "90%",margin:"auto",background:"white",padding:"10px",margin:"auto"}}>
        <CardMedia
        sx={{ height: 30,width:30,padding:"10px"}}
        image={ele.image}
        title="green iguana"
      />
      <CardContent style={{paddingRight:"0px"}}>
        <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"18px",width:"100%",fontWeight:"600"}}>
          {ele.heading}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{width:"90%",}}>
         {ele.para}
        </Typography>
      </CardContent>
    </Card>
  );
}
