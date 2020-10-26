import React, { Fragment } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from "../components/header"
import Footer from "../components/footer"
import ProjectCard from "../components/projectCard"

const useStyles = makeStyles((theme) => ({
          
  root: {
    margin: "100px 10rem",
    [theme.breakpoints.down("sm")]: {
      margin: "65px 2rem",
    },
  },
  title: {
            
          }

  }));
  
  export default () => {
    const classes = useStyles();
  
    return (
        <Fragment>
          <Header />
          <div className={classes.root}> 
          <Grid container style={{margin:"60px 0"}}>
                <h1 className={classes.title}>Projects in Edifixio</h1>
            </Grid>
            <Grid container>
              <p>During my 6 months internship in Edifixio, I have done with a lots of projects including development and design.
                By using React, material design and invision studio 
              </p>
            </Grid>
            <Grid container justify='space-between' spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                 <ProjectCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                 <ProjectCard />
                </Grid>
                <Grid item xs={12} sm={6}  md={4}>
                 <ProjectCard />
                </Grid>
            </Grid>
            <Grid container style={{margin:"60px 0 0 0"}}>
                <h1 className={classes.title}>Personal perject</h1>
            </Grid>
          </div>
            
            <Footer />
        </Fragment>
    );
  }
