import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from "@reach/router";

const useStyles = makeStyles((theme) => ({
          title: {
            fontFamily:'Raleway',
            margin: '0 35px'
          }

  }));
  
  const Projects = (props) => {
    const classes = useStyles();
  
    return (
        <layout>
            <Grid container>
                <h2 className={classes.title}>Chez Edifixio</h2>
            </Grid>
            <Grid container justify='center'>
                <Grid item>

                </Grid>
            </Grid>
        </layout>
    );
  }
  
  export default Projects;