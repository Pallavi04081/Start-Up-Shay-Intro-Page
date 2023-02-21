import Card from "./Card";
import {Grid,Box} from "@mui/material"
const QueryIndex = () => {
  const QueryCard = [
    { image: "card1.png", para: "Frequently Asked Questions"  , left:"85px"},
    { image: "card2.png", para: "Online Payment Process" ,  left:"515px" },
    { image: "card3.png", para: "Home Delivery Options" ,left:"945px"},
  ];

  return (
    <>
    <Box style={{width:"100%",background:"white",paddingTop:"50px",paddingBottom:"50px",marginTop:"120px"}}>
<Grid container spacing={3} sx={{width:"calc(100% - 0px)",marginLeft:"0px",paddingLeft:"6%",paddingRight:"6%"}}>
{QueryCard.map((ele) => {
          return (
            <>
            <Grid item xs={12} sm={4} md={4} >
              <Card ele={ele} />
            </Grid>
            </>
          );
        })}
</Grid>
</Box>
    </>
  );
};
export default QueryIndex;
