import React, { Fragment } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from "../components/header"
import Footer from "../components/footer"

const useStyles = makeStyles((theme) => ({
          title: {
            fontFamily:'Raleway',
            margin: '0 35px'
          }

  }));
  
  export default () => {
    const classes = useStyles();
  
    return (
        <Fragment>
          <Header />
            <Grid container style={{marginTop:"60px"}}>
                <h2 className={classes.title}>Chez Edifixio</h2>
            </Grid>
            <Grid container justify='center'>
                <Grid item>

                </Grid>
            </Grid>
            <Footer />
        </Fragment>
    );
  }
