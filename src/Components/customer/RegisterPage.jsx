import { Alert, Box, Button, Snackbar, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function RegisterPage() {

    let BASE_URL = process.env.REACT_APP_BE_API_URL;
    const [name, setname] = useState("");
    const [number, setnumber] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [isLoading, setisLoading] = useState(false);
    const [error, seterror] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [message, setmessage] = useState("");

    async function register(event){
        event.preventDefault();
        setisLoading(true);
        // validations
        if(name==""||email==""||number===""||password==""||confirmPassword==""){
            seterror(true)
            setmessage("please fill all the details");
            setOpen(true);
            setisLoading(false);
            return;
        }

        if(password!=confirmPassword){
            seterror(true)
            setmessage("password Not matched");
            setOpen(true);
            setisLoading(false);
            return;
        }

        let formData={
            name,
            email,
            number,
            password
        }
        try{
            let res = await axios.post(`${BASE_URL}/customer/register`, formData);
            console.log(res);
            setmessage(res.data.message);
            setOpen(true);
        }
        catch(err){
            seterror(true)
            setmessage(err.response.data.message);
            setOpen(true);
        }
        finally{
            setisLoading(false);
            setname("");
            setemail("");
            setpassword("");
            setnumber("");
            setconfirmPassword("");
        }
    }

    function handleClose(){
        setOpen(false);
    }



  return (
    <Box
        sx={{
            display:'flex',
            justifyContent:"center",
            height:"100vh",
            alignItems:"center"
        }}
    >
        <Box 
            component="form"
            sx={{
                border:"1px solid black",
                width:"400px",
                display:"flex",
                flexDirection:"column",
                gap:'20px',
                padding:"30px",
                borderRadius:"10px",
            }}
            onSubmit={register}
        >
            <Box component="h1" sx={{textAlign:"center"}}>
                Register
            </Box>
            <Box >
                <TextField 
                    id="outlined-basic" 
                    label="Name" 
                    variant="outlined" 
                    fullWidth 
                    onChange={(event)=>setname(event.target.value)} 
                    value={name}
                />
            </Box>

            <Box>
                  <TextField id="outlined-basic" label="email" variant="outlined" fullWidth onChange={(event) => setemail(event.target.value)} value={email}/>
            </Box>

            <Box>
                  <TextField id="outlined-basic" label="number" variant="outlined" fullWidth onChange={(event) => setnumber(event.target.value)} value={number}/>
            </Box>

            <Box>
                  <TextField id="outlined-basic" label="password" variant="outlined" fullWidth onChange={(event) => setpassword(event.target.value)} value={password}/>
            </Box>

            <Box>
                  <TextField id="outlined-basic" label="confirm password" variant="outlined" fullWidth onChange={(event) => setconfirmPassword(event.target.value)} value={confirmPassword}/>
            </Box>

              <Button type='submit' variant="outlined" >
                {
                    isLoading==true?"Loading...":"Register"
                }
              </Button>
              <Box>
                Already registered? <Link to="/login">login</Link>
              </Box>
        </Box>
        {/* popup */}
          <Snackbar 
            open={open} 
            autoHideDuration={6000}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
            onClose={handleClose}
        >
              <Alert
                  onClose={handleClose}
                  severity={error?"error":"success"}
                  variant="filled"
                  sx={{ width: '100%' }}
              >
                  {message}
              </Alert>
          </Snackbar>
    </Box>
  )
}

export default RegisterPage