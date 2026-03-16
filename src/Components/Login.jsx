import { Box, Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import {jwtDecode} from 'jwt-decode';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

    let BASE_URL = process.env.REACT_APP_BE_API_URL;
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [isLoading, setisLoading] = useState(false);
    let navigate=useNavigate();

    async function login(event){
        event.preventDefault();
        setisLoading(true);
        // validations
        if (email == "" || password == "") {
            alert("please fill all the details");
            setisLoading(false);
            return;
        }


        let formData = {
            email,
            password
        }

        try {
            let res = await axios.post(`${BASE_URL}/customer/login`, formData);
            let token=res.data.token;
            localStorage.setItem("token",token);
            let decoded=jwtDecode(token);
            if(decoded.role=="admin")
            {
                navigate("/admin");
            }
            if(decoded.role=="customer"){
                navigate("/customer");
            }
        }
        catch (err) {
            alert(err.response.data.message);
        }
        finally {
            setisLoading(false);
            setemail("");
            setpassword("");
        }
    }
  return (
      <Box
          sx={{
              display: 'flex',
              justifyContent: "center",
              height: "100vh",
              alignItems: "center"
          }}
      >
          <Box
              component="form"
              sx={{
                  border: "1px solid black",
                  width: "400px",
                  display: "flex",
                  flexDirection: "column",
                  gap: '20px',
                  padding: "30px",
                  borderRadius: "10px",
              }}
              onSubmit={login}
          >
              <Box component="h1" sx={{ textAlign: "center" }}>
                  Login
              </Box>

              <Box>
                  <TextField id="outlined-basic" label="email" variant="outlined" fullWidth onChange={(event) => setemail(event.target.value)} value={email} />
              </Box>

              <Box>
                  <TextField id="outlined-basic" label="password" variant="outlined" fullWidth onChange={(event) => setpassword(event.target.value)} value={password} />
              </Box>


              <Button type='submit' variant="outlined" >
                  {
                      isLoading == true ? "Loading..." : "Login"
                  }
              </Button>
              <Box>
                  Not registered? <Link to="/register">register</Link>
              </Box>
          </Box>
      </Box>
  )
}

export default Login