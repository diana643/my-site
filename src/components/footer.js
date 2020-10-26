import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

const useStyles = makeStyles(theme => ({
  icon: {
    color: "#666",
    "&:hover": {
      color: "#000",
    },
  },
}))

function Footer(props) {
  const classes = useStyles()

  return (
    <div style={{ marginTop: "150px", paddingBottom: "50px" }}>
            <hr
        style={{ border: "1px soild #688A5F", width: "100%", margin: "15px 0" }}
      />
      <Grid container alignItems="center" direction="column">
        <Grid item>
          <p
            style={{
              fontFamily: "Raleway",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            Contact with me
          </p>
        </Grid>
        <Grid item style={{marginTop: "-20px"}}>
          <p
            style={{
              fontFamily: "Raleway",
              fontSize: "18px",
              fontWeight: "300",
            }}
          >
             sian.d.liu@gmail.com 
          </p>
        </Grid>
      </Grid>

      <Grid container justify="center" spacing={3} alignItems="center">
        <Grid item>
          <a href="https://www.linkedin.com/in/sian-liu-84a9a1170/">
            <LinkedInIcon size="small" className={classes.icon} />
          </a>
        </Grid>
        <Grid item>
          <a href="https://www.instagram.com/diana643/">
            <InstagramIcon size="small" className={classes.icon} />
          </a>
        </Grid>
        <Grid item>
          <a href="https://twitter.com/643diana643">
            <TwitterIcon size="small" className={classes.icon} />
          </a>
        </Grid>
        <Grid item>
          <a href="https://github.com/diana643">
            <GitHubIcon size="small" className={classes.icon} />
          </a>
        </Grid>
      </Grid>
      
      <Grid container justify="center">
        <Grid item>
          <p
            style={{
              fontFamily: "Raleway",
              fontSize: "18px",
              fontWeight: "300",
            }}
          >
            © 2020 Sian Liu
          </p>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
