import React, { Fragment } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';
import selfPhoto from '../assets/pics/photo-me.png'
import { Link } from "@reach/router";

const useStyles = makeStyles((theme) => ({
    root:{
      
    },
  }));
  
  const Main = (props) => {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container style={{marginTop:'85px'}}>
          <Grid item xs={12} sm={6} style={{padding:'0 35px'}}>
            <Grid container>
              <Fade left>
              <h1 style={{fontFamily: 'Raleway'}}>Hello there! This is Sian.</h1>
                <h2 style={{fontFamily: 'Raleway', fontWeight: '300'}}>
                I come from Beijing, and now based in Paris.
                I love UI/UX design, Web development. And also I have a
                podcast <a style={{textDecoration: 'none', color: "#000"}} href="https://anchor.fm/diana643"> Liang Qiang.</a> 
                </h2>
              </Fade>
            </Grid>
            <Grid container justify='flex-end'>
              <h3>know more about me</h3>
            </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container justify='center' alignItems='flex-begin'>
              < img src={selfPhoto} alt="me" style={{width:'65%'}} />
              </Grid>        
            </Grid>
        </Grid>
      </div>
    );
  }
  
  export default Main;