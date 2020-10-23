import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from "@reach/router";
import Header from "../components/header"
import Footer from "../components/footer"

const useStyles = makeStyles((theme) => ({
          title: {
            fontFamily:'Raleway',
            margin: '0 35px'
          }

  }));
  
export default() => {
    const classes = useStyles();
  
    return (
        <div>
          <Link to="/"></Link>
          <Header />
            <Grid container>
                <h2 className={classes.title}>Contact me</h2>
            </Grid>
            <Grid container justify='center'>
                <Grid item>

                </Grid>
            </Grid>
            <Footer />
        </div>
    );
  }
  