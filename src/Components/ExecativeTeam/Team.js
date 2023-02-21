import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Teamcard from './TeamCardd';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function TeamComp() {
  const QueryCard = [
    {image:"Harshit.png",  heading: "Harshit Dahlan",subheading:"Founder & CEO",para:"Harshit is a qualified Chartered Accountant (CA) with over 5 years of experience in Accounting and Hedge fund operations. He has proven his excellence by working with various multinational companies in their core accounts team and finance team."},
    {image:"shivam.png",  heading: "Shivam Rastogi",subheading:"Co-founder & Managing",para:"Shivam Rastogi is a finance professional with an MBA and over 3 years of experience in structured finance and cyber security. He has a strong track record of supporting middle market loan portfolios and ensuring compliance with cyber security regulations for multiple firms."},
    {image:"shubham.png",  heading: "Shubham Agarwal",subheading:"Co-Founder & Director",para:"Shubham Agarwal is an experienced professional in the field of accounting and finance with an MBA degree and over 5 years of experience in bookkeeping and accounting. He has worked with various private firms, providing support for their in-house accounting operations."},
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Teamcard ele={QueryCard[0]}/>
        </Grid>
        <Grid item xs={12} md={6}>
        <Teamcard ele={QueryCard[1]}/>
        </Grid>
        <Grid item xs={12} md={6} sx={{margin:"auto"}}>
        <Teamcard ele={QueryCard[2]}/>
        </Grid>
      </Grid>
    </Box>
  );
}