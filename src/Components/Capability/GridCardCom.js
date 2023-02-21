import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Capablitycard from './CapablityCard';

export default function GridCardCom() {
    const QueryCard = [
        { image: "stressmanagement1.png", heading: "REDUCE STRESS", para: "WE DO ALL THE WORK", left: "85px" },
        { image: "stressmanagement2.png", heading: "SAVE MONEY", para: "Reduce upto 50% of your cost", left: "515px" },
        { image: "stressmanagement3.png", heading: "Expertise", para: "TEAM OF QUALIFIED PROFESSIONALS", left: "945px" },
        { image: "stressmanagement4.png", heading: "SAVE TIME", para: "KEEPING ACTIVITIES OFF YOUR PLATE", left: "945px" },
    ];

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={3} columnSpacing={1}>
                {
                    QueryCard.map((ele) => {
                        return (
                            <>
                                <Grid item xs={12} sm={6} >
                                    <Capablitycard ele={ele} />
                                </Grid>
                            </>
                        )
                    })
                }
            </Grid>
        </Box>
    );
}