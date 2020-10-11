import React from "react"
import Header from "../components/header"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../assets/theme";

const useStyles = makeStyles((theme) => ({
  
}));

const Index = (props) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div>
      <Header />
      <div>
        <Grid container>
          <h1 style={{fontFamily: 'Raleway'}}>Hello there!This is Sian</h1>
        </Grid>
        <Grid container>
          <Grid item>
            <h1>Web Development</h1>
          </Grid>
          <Grid item>
            <h1>UI/UX Design</h1>
          </Grid>
        </Grid>
        <Grid container>
          <h1>Podcast</h1>
        </Grid>
        <Grid container>
          <h1>Music reviews</h1>
        </Grid>
      </div>
      
    </div>
    </ThemeProvider>
    
  );
}

export default Index;