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
    fontSize: "25px",
    "&:hover": {
      color: "#688A5F",
    },
  },
  title: {
    WebkitTextStroke: ".8px #000",
    fontFamily: "Roboto",
    fontSize: "24px",
    fontWeight: "900",
    color: "#FFFAF4",
    "&:hover": {
      color: "#688A5F",
      WebkitTextStroke: "1px #688A5F",
    },
  },
  link: {
    font: "16px",
    textDecoration: "none",
    color: "#000",
    transition: "0.2s ease",
    "&:hover": {
      backgroundColor: "#688A5F",
      color: "#f8f8f8",
    },
  },
}))

function Footer(props) {
  const classes = useStyles()

  return (
    <div style={{ margin: "150px 50px 0 50px", paddingBottom: "25px" }}>
      <Grid container justify="center">
        <div
          style={{ height: "1px", width: "100%", backgroundColor: "#FEE3C5" }}
        ></div>
      </Grid>
      <Grid container alignItems="center" justify="center">
        <Grid item>
          <p className={classes.title}>Contact</p>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="center">
        <Grid item>
          <a herf="mailto: sian.d.liu@gmail.com" className={classes.link}>
            SIAN.D.LIU@GMAIL.COM
          </a>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="center">
        <Grid item>
          <p className={classes.link}>(+33) 6 65 51 45 88</p>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="center">
        <Grid item>
          <p className={classes.title}>Follow me</p>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={4} alignItems="center">
        <Grid item>
          <a href="https://www.linkedin.com/in/sian-liu-84a9a1170/">
            <LinkedInIcon className={classes.icon} />
          </a>
        </Grid>
        <Grid item>
          <a href="https://www.instagram.com/diana643/">
            <InstagramIcon className={classes.icon} />
          </a>
        </Grid>
        <Grid item>
          <a href="https://twitter.com/643diana643">
            <TwitterIcon className={classes.icon} />
          </a>
        </Grid>
        <Grid item>
          <a href="https://github.com/diana643">
            <GitHubIcon className={classes.icon} />
          </a>
        </Grid>
      </Grid>

      <Grid container justify="center">
        <Grid item>
          <p
            style={{
              fontFamily: "Raleway",
              fontSize: "13px",
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
