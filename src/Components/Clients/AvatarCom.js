import { Typography,Avatar,Box } from "@mui/material"

const AvatarCom = ()=>{

 return(
     <Box style={{padding:"20px",margin:"auto",width:"40%"}}>
      <Box style={{display:"flex",alignItem:"center",justifyContent:"center"}}><Avatar src="Avatar.png"/></Box>
      <Typography style={{textAlign:"center",fontSize:"12px"}}>Paulus Haverinen</Typography>
      <Typography style={{textAlign:"center",fontSize:"12px",color:"#2D3891",fontWeight:"600"}}>Owner, Ikirakenne Ltd</Typography>
     </Box>

 )

}

export default AvatarCom