import React, { useState } from 'react'
import { Button, FormControl, Checkbox, FormGroup, InputLabel, MenuItem, Select, TextField, FormControlLabel, FormLabel, RadioGroup, Radio } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';


// import SendIcon from '@mui/icons-material/Send';
const LoginForm = () => {

  const [value, setValue] = useState({
    name: "", email: "", password: "", coures: "", terms: false, gender: ""
  })

  const menuList = ["mongodb", "sql", 'express', 'reactjs', 'nodejs', 'reactnative']
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
    // console.log(value);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // setValue({ ...value, [e.target.name]: e.target.value })
    console.log(value);

  }


  return (
    <form onSubmit={handleSubmit}>
      <TextField name='name' type='text' variant='outlined' placeholder='name' value={value.name} onChange={handleChange} sx={{ margin: "10px" }}></TextField>
      <TextField name='email' type='email' variant='outlined' placeholder='email' value={value.email} onChange={handleChange} sx={{ margin: "10px" }}></TextField>

      <TextField name='password' type='password' variant='outlined' placeholder='password' value={value.password} onChange={handleChange} sx={{ margin: "10px" }}></TextField>
      <br />

      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup name='gender' onChange={handleChange}>
          <FormControlLabel value='male' label='Male' control={<Radio />} ></FormControlLabel>
          <FormControlLabel value='female' label='Female' control={<Radio />} ></FormControlLabel>
          <FormControlLabel value='other' label='Other' control={<Radio />} ></FormControlLabel>
        </RadioGroup>
      </FormControl>

      <FormControl fullWidth sx={{ margin: "10px" }}  >
        <InputLabel id="menu" >Coures</InputLabel>
        <Select name='coures' label="course" value={value.coures} onChange={handleChange}>
          {menuList.map((item, ind) => {
            return (
              <MenuItem key={ind} value={item} >{item}</MenuItem>
            )
          })}
        </Select>
      </FormControl>

      <br />

      <FormGroup sx={{ margin: "10px" }}>
        <FormControlLabel label="I Agree Terms and Conditions"
          control={<Checkbox
            onChange={() =>
              setValue(pre => ({ ...pre, terms: !value.terms }))} checked={value.terms} />}

        />
      </FormGroup>
      <br />
      <Button startIcon={<DeleteIcon />} variant='contained' type='submit' sx={{ margin: "10px" }}>submit</Button>
      {/* <Button startIcon={<SendIcon />} variant='contained' type='submit' sx={{ margin: "10px" }}>submit</Button> */}
    </form>
  )
}

export default LoginForm