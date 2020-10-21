import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from "@reach/router";

const useStyles = makeStyles((theme) => ({
        paper: {
            padding: '6px 16px',
          },
          secondaryTail: {
            backgroundColor: theme.palette.secondary.main,
          },

  }));
  
  const About = (props) => {
    const classes = useStyles();
  
    return (
        <layout>
            <Grid container>
                <h1 style={{fontFamily:'Raleway'}}>About me</h1>
            </Grid>
            <Grid container justify='center'>
                <Grid item>

                </Grid>
            </Grid>
        </layout>
    );
  }
  
  export default About;