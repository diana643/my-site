import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Header from "../components/header"
import Footer from "../components/footer"
import Gallery from "react-photo-gallery"

import img001 from "../assets/pics/photos/001.jpg"
import img002 from "../assets/pics/photos/002.jpg"
import img003 from "../assets/pics/photos/003.jpg"
import img004 from "../assets/pics/photos/004.jpg"
import img005 from "../assets/pics/photos/005.jpg"
import img006 from "../assets/pics/photos/006.jpg"
import img007 from "../assets/pics/photos/007.jpg"
import img008 from "../assets/pics/photos/008.jpg"
import img009 from "../assets/pics/photos/009.jpg"
import img010 from "../assets/pics/photos/010.jpg"
import img011 from "../assets/pics/photos/011.jpg"
import img012 from "../assets/pics/photos/012.jpg"

const tileData = [
  {
    src: img001,
    width: 16,
    height: 9,
  },
  {
    src: img002,
    width: 16,
    height: 9,
  },
  {
    src: img003,
    width: 9,
    height: 16,
  },
  {
    src: img004,
    width: 16,
    height: 9,
  },
  {
    src: img005,
    width: 16,
    height: 9,
  },
  {
    src: img006,
    width: 9,
    height: 16,
  },
  {
    src: img007,
    width: 16,
    height: 9,
  },
  {
    src: img008,
    width: 16,
    height: 9,
  },
  {
    src: img009,
    width: 16,
    height: 9,
  },
  {
    src: img010,
    width: 9,
    height: 16,
  },
  {
    src: img011,
    width: 16,
    height: 9,
  },
  {
    src: img012,
    width: 9,
    height: 16,
  },
]

const useStyles = makeStyles(theme => ({
  root: {
    margin: "100px 10rem",
    fontFamily: "Raleway",
    [theme.breakpoints.down("sm")]: {
      margin: "65px 2rem",
    },
  },
  title: {
    
    
  },
  gridList: {
    width: 500,
    height: 450,
  },
}))

export default () => {
  const classes = useStyles()

  return (
    <div>
      <Header />
      <div className={classes.root}>
        <Grid container style={{ margin: "80px 0" }}>
          <h1 className={classes.title}>Current coups de cœur</h1>
        </Grid>
        <Grid container justify="center" style={{ margin: "50px 0" }}>
          <Gallery photos={tileData} />
        </Grid>
      </div>

      <Footer />
    </div>
  )
}
