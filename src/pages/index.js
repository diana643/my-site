import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Fade from "react-reveal/Fade"
import selfPhoto from "../assets/pics/photo-me.png"
import MenuButton from "../components/MenuButton"
import Header from "../components/header"
import Footer from "../components/footer"

const useStyles = makeStyles(theme => ({
  root: {},
  title: {
    WebkitTextStroke: "1px #000",
    color: "#FFFAF4",
    fontSize: "40px",
    fontFamily: "Roboto",
    transition: "0.1s",
    "&:hover": {
      color: "#688A5F",
      WebkitTextStroke: "1px #688A5F",
    }
  },
  link: {
    textDecoration: "none",
    color: "#000",
    transition: "0.2s ease",
    "&:hover": {
      backgroundColor: "#688A5F",
      color: "#f8f8f8",
    },
  },
}))

export default () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      {/* <Link to="/about/">
        about
      </Link> */}
      <Grid container style={{ marginTop: "50px" }}>
        <Grid item xs={12} sm={6} style={{ padding: "0 35px" }}>
          <Grid container>
            <Fade left>
              <h1 className={classes.title}>
                Hello there! This is Sian.
              </h1>
              <h2 style={{ fontWeight: "300",letterSpacing: ".2rem", }}>
                I come from Beijing, and now based in Paris. I love UI/UX
                design, Web development. And also I have a podcast{" "}
                <a className={classes.link} href="https://anchor.fm/diana643">
                  {" "}
                  Liang Qiang.
                </a>
              </h2>
            </Fade>
          </Grid>
          <Grid container justify="flex-end" style={{marginTop:"15px"}}>
            <MenuButton to="/about/" title="Know more about me " />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container justify="center" alignItems="flex-start">
            <img
              src={selfPhoto}
              alt="me"
              style={{ width: "65%", height: "65%" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}
