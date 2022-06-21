// import React from "react";

// const SignUp = () => {
//   return <div>Signup</div>;
// };

// export default SignUp;
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [credentials, setCredentials] = useState({
    Name: "",
    Email: "",
    Password: "",
  });
  let navigate = useNavigate();
  // const {name, email, password} = credentials;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9066/api/signup", credentials).then((data) => {
      console.log(data.data.createUser);
      if (data.data.message === "succesfully created User") {
        // localStorage.setItem("token", data.data.token);
        // console.log(data.data.token);
        window.alert("Register Successfull");
        navigate("/Login");
      }
    });
    // const response = await fetch("http://localhost:5000/api/signUp", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name, email, password
    //   }),
    // });
    // const json = await response.json();
    // console.log(json);
    // if(json.success){
    //   //save the auth-token and redirect
    //   localStorage.setItem("token", json.token);
    //   navigate('/login')
    //   window.alert("Account Created Successfully");
    // }
  };
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  value={credentials.Name}
                  id="firstName"
                  onChange={handleChange}
                  label="Name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Email"
                  value={credentials.Email}
                  onChange={handleChange}
                  label="Email Address"
                  name="Email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Password"
                  label="Password"
                  value={credentials.Password}
                  type="password"
                  id="password"
                  onChange={handleChange}
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="./Login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
