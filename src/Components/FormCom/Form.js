import { useState } from "react";
import { Box, Button, TextareaAutosize, TextField, Typography, Select, InputLabel, MenuItem, FormControl } from "@mui/material"
import EmailIcon from '@mui/icons-material/Email';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import "./Form.css"

const FormCom = () => {
  const [input, setInput] = 
  useState([])

  console.log(input)

  const handleChange = (e) => {
    setInput((previous)=>{
      return {...previous,[e.target.name]:e.target.value}
    })
  }


  return (
    <>
    <Box style={{width:"100%",paddingTop:"100px",background:"white",paddingBottom:"50px"}}>
      <Box class="formContainer">
        <Box style={{ width: "99%", margin: "auto",marginBottom:"10px" }}>
        <Typography class="formheading">Contact</Typography>
        <Typography sx={{textAlign:"center",fontWeight:"bold",lineHeight:"35px"}}>Leave us a message</Typography>
        </Box>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: "98%"},
            boxSizing: "border-box"
          }}
          noValidate
          autoComplete="off"
        > 
          <Box class="emailPhoneContainer" style={{marginBottom:"25px",height:"40px"}} >
            <Box class="phonefiled">
            <TextField
          id="outlined-password-input"
          label="First Name"
          type="text"
          autoComplete="current-password"
          style={{width:"100%"}}
          className="inputfiled"
        />
            </Box>
            <Box class="emailfield" style={{marginBottom:"25px",height:"40px"}}>
              <TextField
                required
                id="outlined-required"
                type="text"
                label="Last Name"
                name="email"
                style={{width:"100%"}}
                className="inputfiled"
                onChange={(e) => { handleChange(e) }}
              />
            </Box>
          </Box>
          <Box style={{marginBottom:"25px",height:"40px"}}>
            <TextField
              required
              id="outlined-required"
              label="EmailAddress"
              name="CompanyGroup"
              style={{width:"100%"}}
              className="inputfiled"
              onChange={(e) => { handleChange(e) }}
            />

          </Box>
          <Box style={{marginBottom:"40px"}}>
            <TextField
              required
              id="outlined-required"
              label="Describe Your Bussines"
              name="CompanyGroup"
              style={{width:"100%"}}
              className="inputfiled"
              onChange={(e) => { handleChange(e) }}
            />

          </Box>
          <Box style={{marginBottom:"25px",color:"#878787"}}>
          <Box >
          <Typography sx={{fontSize:"14px",marginBottom:"10px"}}>Which services you are interested in</Typography>
          <FormControlLabel className="lableClass" control={<Checkbox sx={{color:"#878787"}} />} label="Bookkeeping/Accounting" />
          </Box>
          <Box>
          <FormControlLabel className="lableClass" control={<Checkbox sx={{color:"#878787"}} />} label="Clean Up/Catch Up" />
          </Box>
          <Box>
          <FormControlLabel className="lableClass" control={<Checkbox sx={{color:"#878787"}} />} label="Payroll Services" />
          </Box>
          <Box >
          <FormControlLabel className="lableClass" control={<Checkbox sx={{color:"#878787"}} />} label="Senior Accounting" />
          </Box>
          <Box >
          <FormControlLabel className="lableClass" control={<Checkbox sx={{color:"#878787"}} />} label="taxation"/>
          </Box>
          <Box >
          <FormControlLabel className="lableClass" control={<Checkbox sx={{color:"#878787"}} />} label="Label"/>
          </Box>
          </Box>
          <Box style={{marginBottom:"15px",marginTop:"35px",color:"#878787"}}>
            <TextField
              id="standard-multiline-static"
              multiline
              rows={4}
              name="help"
              label="Your Message"
              style={{width:"100%"}}
              className="lableClass"
              onChange={(e) => { handleChange(e) }}
            />
          </Box>
          <Box style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <Button variant="contained" class="btnCom" >
              Send
            </Button>
          </Box>
        </Box>
        </Box>
        </Box>
    </>
  )

}

export default FormCom