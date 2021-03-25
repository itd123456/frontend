import React, { Component } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { SnackbarProvider, useSnackbar } from 'notistack';




class SignIn extends Component{
    
    constructor(props){
        super(props);
        this.state = [];

        this.setId = this.setId.bind(this);
        this.setPassword = this.setPassword.bind(this);
    }


    setId = event =>{
        this.setState({
            id: event.target.value
        });
    };

    setPassword = event =>{
        this.setState({
            password: event.target.value
        });
    };

    // loginSnackBar = () =>{
    //     const { enqueueSnackbar } = useSnackbar();
    //     enqueueSnackbar('This is a success message!', { variant });

    //     console.log(123);
    // }

    signIn = () =>{
 

        if(!this.state.id || !this.state.password === '')
            this.setState({
                msg: "Email and/or password is required!",
            });

        const userLogin ={
            email: this.state.id,
            password: this.state.password
        }
        axios.post("http://localhost:6969/user/", userLogin)
             .then(res => console.log(res.data))
             .catch((err =>{console.log(err)}));
        
    }
    

    render(){
        return(
            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '20vh' }}
            
          >
            <Grid item >
                <img src="/dswd-logo.jpg" width="500" height="300"/>
            </Grid>

            <Grid item xs={12} md={4} >
            <TextField
            
              variant="standard"
              placeholder="ID"
              margin="normal"
              required
              onChange={this.setId}
              value={this.state.id}
            />
            </Grid>   

            <Grid item xs={12} md={4} >
            <TextField
          
              variant="standard"
              placeholder="Password"
              margin="normal"
              required
              type="password"
              onChange={this.setPassword}
              value={this.state.password}
            />
            </Grid>  

            <Grid item xs={12} md={4}>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  this.signIn();
                }}
              >
                Sign In
              </Button>
              {/* <SnackbarProvider maxSnack={3}/> */}
                  
            </Grid> 
          </Grid> 
        );
    }

}

export default SignIn;