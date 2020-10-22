import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from "@reach/router";

const useStyles = makeStyles((theme) => ({
        root: {
            marginTop: '50px',
          },
          secondaryTail: {
            backgroundColor: theme.palette.secondary.main,
          },
          title: {
            fontFamily:'Raleway',
            margin: '0 35px'
          }

  }));
  
  const About = (props) => {
    const classes = useStyles();
  
    return (
       <div className={classes.root}>
            <Grid container>
                <h2 className={classes.title}>About me</h2>
            </Grid>
            <Grid container justify='center'>
                <Grid item>
                    <p>
                        
                    </p>
                </Grid>
            </Grid>
       </div>
    );
  }
  
  export default About;