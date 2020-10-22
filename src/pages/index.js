import React, { Fragment } from "react"
import Header from "../components/header"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Main from "../pages/main"
import Layout from "../components/layout"
import About from "../pages/about"
import Foot from "../components/foot"
import Projects from "../pages/projects"
import Contact from "../pages/contact"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    //background: "rbg(255,255,255)",
    // background:
    //   "linear-gradient(-152deg, rgba(255,255,255,1) 46%, rgba(193,215,197,1) 100%)",
    //height: '800px',

  },
  podcast: {
    fontFamily: "Raleway",
  },
}))

const Index = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Layout>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Header />
              <Main />
              <Foot />
            </Route>
            <Route exact path='/about'>
              <Header />
              <About />
              <Foot />
            </Route>
            <Route exact path='/projects'>
              <Header />
              <Projects />
              <Foot />
            </Route>
            <Route exact path='/contact'>
              <Header />
              <Contact />
              <Foot />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </div>
  )
}

export default Index
