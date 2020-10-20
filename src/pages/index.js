import React, { Fragment } from "react"
import Header from "../components/header"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
  root:{
    background: 'rbg(255,255,255)',
    background: 'linear-gradient(152deg, rgba(255,255,255,1) 46%, rgba(193,215,197,1) 100%)',
    height: '800px',
    width: '100%'
    
  }
}));

const Index = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Header />
      </Grid>
      <Grid container style={{marginTop:'100px'}}>
        <Grid item xs={12} sm={6} style={{paddingLeft:'10px'}}>
          <Grid container>
            <Fade left>
            <h1 style={{fontFamily: 'Raleway'}}>Hello there! This is Sian.
              I come from Beijing, and now based in Paris.
              I love UI/UX design, Web development.
              And also I have a music blog and a podcast for fun.</h1>
            </Fade>
          </Grid>
          <Grid container justify='flex-end'>
            <h3>know more about me.</h3>
          </Grid>
            
          </Grid>
          <Grid xs={12} sm={6}>
            
          </Grid>
      </Grid>
    </div>
  );
}

export default Index;