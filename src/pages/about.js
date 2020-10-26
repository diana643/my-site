import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Header from "../components/header"
import Footer from "../components/footer"
import { Paper } from "@material-ui/core"
import CircularProgress from "@material-ui/core/CircularProgress"

const useStyles = makeStyles(theme => ({
  root: {
    margin: "100px 10rem",
    [theme.breakpoints.down("sm")]: {
      margin: "65px 2rem",
    },
  },
  title: {
    color: "#688A5F",
    fontWeight: "600",
    fontSize: "22px",
  },
}))

export default () => {
  const classes = useStyles()

  return (
    <div>
      <Header />
      <div className={classes.root}>
        <Grid container>
          <h1>About me</h1>
        </Grid>
        <Grid container>
          <Grid item item xs={12} sm={6}>
            <p>
              Hi, my name is Sian. Currently base in Paris. New graduate from
              engineer school,
            </p>
          </Grid>
          <Grid item item xs={12} sm={6}></Grid>
        </Grid>
        <Grid container justify="flex-end">
          <h3 className={classes.title}>Education</h3>
        </Grid>
        <Grid container justify="space-between">
          <Grid item xs={12} sm={6}></Grid>
          <Grid item xs={12} sm={6}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </Grid>
        </Grid>
        <Grid container>
          <p></p>
        </Grid>
        <Grid container>
          <h3 className={classes.title}>Professional experience</h3>
        </Grid>
        <Grid container>
          <Grid item item xs={12} sm={6}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </Grid>
          <Grid item item xs={12} sm={6}></Grid>
        </Grid>
        <Grid container>
          <h3 className={classes.title}>Skills</h3>
        </Grid>
        <Grid container justify="space-between" alignItems="center" spacing={3}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <h3>React</h3>
              </Grid>
              <Grid item>
                <CircularProgress
                  variant="static"
                  value={80}
                  thickness={10}
                  size={80}
                  style={{ color: "#B1C8C2" }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <h3>Angular</h3>
              </Grid>
              <Grid item>
                <CircularProgress
                  variant="static"
                  value={60}
                  thickness={10}
                  size={80}
                  style={{ color: "#B1C8C2" }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <h3>Gatsby</h3>
              </Grid>
              <Grid item>
                <CircularProgress
                  variant="static"
                  value={65}
                  thickness={10}
                  size={80}
                  style={{ color: "#B1C8C2" }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <h3>Node.js</h3>
              </Grid>
              <Grid item>
                <CircularProgress
                  variant="static"
                  value={55}
                  thickness={10}
                  size={80}
                  style={{ color: "#B1C8C2" }}
                />
              </Grid>
            </Grid>
          </Grid>
                    
          <Grid item xs={6} sm={4} md={3}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <h3>Invison studio</h3>
              </Grid>
              <Grid item>
                <CircularProgress
                  variant="static"
                  value={82}
                  thickness={10}
                  size={80}
                  style={{ color: "#B1C8C2" }}
                />
              </Grid>
            </Grid>
          </Grid>
                    
          <Grid item xs={6} sm={4} md={3}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <h3>Figma</h3>
              </Grid>
              <Grid item>
                <CircularProgress
                  variant="static"
                  value={65}
                  thickness={10}
                  size={80}
                  style={{ color: "#B1C8C2" }}
                />
              </Grid>
            </Grid>
          </Grid>
                    
          <Grid item xs={6} sm={4} md={3}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <h3>Sketch</h3>
              </Grid>
              <Grid item>
                <CircularProgress
                  variant="static"
                  value={75}
                  thickness={10}
                  size={80}
                  style={{ color: "#B1C8C2" }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <h3>ES6</h3>
              </Grid>
              <Grid item>
                <CircularProgress
                  variant="static"
                  value={75}
                  thickness={10}
                  size={80}
                  style={{ color: "#B1C8C2" }}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} sm={4} md={3}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <h3>git</h3>
              </Grid>
              <Grid item>
                <CircularProgress
                  variant="static"
                  value={75}
                  thickness={10}
                  size={80}
                  style={{ color: "#B1C8C2" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  )
}
