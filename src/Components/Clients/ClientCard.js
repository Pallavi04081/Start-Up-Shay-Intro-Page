
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Clientcard({ele}) {
  return (
    <Card sx={{ maxWidth: 500,margin:"auto",background:"white",borderRadius:"25px"}}>
      <Typography style={{textAlign:"center",fontSize:"35px",fontWeight:"bold"}}>5.0</Typography>
      <CardMedia
        sx={{ height: 50,width:250,marginTop:"10px",margin:"20px",marginBottom:"10px",margin:"auto"}}
        image={ele.image}
        title="green iguana"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{textAlign:"center",fontSize:"16px",lineHeight:"24px"}}>
         {ele.para}
        </Typography>
      </CardContent>
    </Card>
  );
}
