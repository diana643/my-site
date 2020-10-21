import React, { Fragment } from "react"
import Header from "../components/header"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Main from "../pages/main"
import Layout from "../components/layout"
import About from "../pages/about"
import Foot from "../components/foot"

const useStyles = makeStyles((theme) => ({
  root:{
    background: 'rbg(255,255,255)',
    background: 'linear-gradient(-152deg, rgba(255,255,255,1) 46%, rgba(193,215,197,1) 100%)',
    //height: '800px',
    width: '100wv'
    
  },
  podcast: {
    fontFamily: 'Raleway',

  }
}));

const Index = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     <Layout>
        <Grid container>
        <Header />
      </Grid>
      <Grid container>
        <Main />
      </Grid> 
      {/* <Grid container>
        <About />  
      </Grid>    */}
      <Grid container style={{marginTop: '70px', paddingBottom: '50px'}}>
        <Foot />
      </Grid>
      </Layout>
    </div>
  );
}

export default Index;