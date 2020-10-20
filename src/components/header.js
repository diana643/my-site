import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    //flexGrow: 1,
    backgroundColor: '#fff',
    //opacity: '0.0'
  },
  title: {
    color: '#000'
  },
}));

function Header(props) {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar className={classes.root}>
      <Toolbar> 
        <Grid container justify='space-between' alignItems="center"> 
          <Grid item>
            <Typography
            variant="h6"
            className={classes.title}
            >
            Welcome to my site
            </Typography>
          </Grid>
          <Grid item>
            <Grid container>
              <Button
                component={Link}
                to="/"
              >
                Home
              </Button>
              <Button
              component={Link}
              to="/"
            >
              Projects
            </Button>
            <Button
              component={Link}
              to="/"
            >
              Contact
            </Button>
            </Grid>
          </Grid>

        </Grid>
 
      </Toolbar>
      </AppBar>
    </Fragment>
    
  );
}

export default Header;