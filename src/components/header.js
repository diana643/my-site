import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import sizeMe from 'react-sizeme';
import menuSmall from "../components/menu"

function menuBig(props) {
  return (
      <Grid container spacing={2}> 
              <Grid item>
                <Button component={Link} to="/">
                  About me
                </Button>
              </Grid>
              <Grid item>
                <Button component={Link} to="/">
                Projects
                </Button>
              </Grid>
              <Grid item>
                <Button >Contact</Button>
              </Grid> 
      </Grid>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    //flexGrow: 1,
    backgroundColor: 'rgb(255,255,255,0.0)',
    height: '60px',
    width: '100%'
  },
  title: {
    fontSize: '25px',
    color: '#000',
    fontFamily: 'Raleway',
    fontWeight: '300'
  },
}));

function Header(props) {
  const classes = useStyles();

  const{ width,height} = props.size;

  const ToRenderMenu = width > 600
  ? menuBig: menuSmall;

  return (
    <Fragment>
      <Paper elevation={0} className={classes.root}>
      <Grid container justify='space-between' alignItems="center" style={{padding:'0 35px'}}> 
          <Grid item>
            <Typography
            variant="h6"
            className={classes.title}
            >
            Welcome
            </Typography>
          </Grid>
          <Grid item>
            <ToRenderMenu />
          </Grid>

        </Grid>
      </Paper>
    </Fragment>
    
  );
}

export default sizeMe({monitorWidth: true}) (Header);