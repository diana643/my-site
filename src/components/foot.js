import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles(theme => ({

}));

function Foot (props) {
  const classes = useStyles();

  
  return (
    <Fragment>
        <hr style={{border: '1px soild #000', width: '100%', margin: '15px 0'}} />
        <Grid container justify='center' spacing={3} alignItems='center'> 
            <Grid item>
                <LinkedInIcon size='small' />
            </Grid>
            <Grid item>
                <InstagramIcon size='small' />
            </Grid>
            <Grid item>
                <TwitterIcon size='small' />
            </Grid>
            <Grid item>
                <GitHubIcon size='small' />
            </Grid>
        </Grid>
        <Grid container justify='center'>
            <Grid item>
                <p style={{fontFamily: 'Raleway', fontSize: '18px', fontWeight:'300'}}>© 2020 Sian Liu </p>
            </Grid>   
        </Grid>
     
    </Fragment>
    
  );
}

export default Foot;