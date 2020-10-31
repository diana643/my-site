import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Header from "../components/header"
import Footer from "../components/footer"
import CircularProgress from "@material-ui/core/CircularProgress"


const useStyles = makeStyles(theme => ({
  root: {
    margin: "100px 10rem",
    [theme.breakpoints.down("sm")]: {
      margin: "65px 2rem",
    },
  },
  title: {
    WebkitTextStroke: "1px #000",
    color: "#f8f8f8",
    fontSize: "40px",
    fontFamily: "Roboto",
    transition: "0.1s",
    "&:hover": {
      color: "#688A5F",
      WebkitTextStroke: "1px #688A5F",
    },
  },
  context: {
    fontSize: "20px",
    fontWeight: "300",
    letterSpacing: ".2rem",
  },
  skill: {
    color: "#EAE691",
  },
}))

export default () => {
  const classes = useStyles()

  return (
    <div>
      <Header />
      <div className={classes.root}>
        <Grid container justify="center">
          <h1 className={classes.title}>About me</h1>
          
        </Grid>
        {/* <Grid container justify="center" style={{margin:"-10px 0 20px 0"}}>
        <div style={{width:"160px",height:"5px",backgroundColor:"#EAE691"}}></div>
        </Grid> */}
        <Grid container>
          <Grid>
            <Grid container>
              <p className={classes.context}>
                Hi, my name is Sian. Currently base in Paris. New graduate from
                engineer school. Always loving life. Always curieuse. Like web
                development and UI/UX design. Vision art and music are my
                passion, having a music reference blog in weChat page, and a
                podcast named Liang Qiang. Also, had hosted two epsoides podcast
                of normie.fm.
              </p>
            </Grid>
            <Grid container justify="center">
              <h1 className={classes.title}>Education</h1>
            </Grid>
            <Grid container>
              <p className={classes.context}>
                Graduated from Beijing university of technology and Efrei Paris.
                Got my computer science bachorlor degree in 2018 and my master
                degree of imagreie and vitural reality in 2020. And during my
                study, I just find my interest in design, and front-end
                development. Three years study in France also let me gain the
                good ability in speakung French.
              </p>
            </Grid>
            <Grid container justify="center">
              <h1 className={classes.title}>Professional experience</h1>
            </Grid>
            <Grid container>
              <p className={classes.context}>
                I have worked in a Chinese language learning start-up called
                Wiithy in 2017 and worked in Edifixio as a web designer and
                front-end developper for six months during my master 2. I like
                working in the different and dynamic environment and know new
                people. And familar with serveal front-end framework and design
                tools. Used to work in agile development. And now building my
                personal website(The one you're reading at!).
              </p>
            </Grid>
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <Grid container>
              <Timeline align="alternate">
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot style={{ color: "#688A5F" }} />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper style={{ padding: "10px 25px",textAlign:"center"}}>
                      <p>Beijing university of technology</p>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot style={{ color: "#688A5F" }} />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper style={{ padding: "10px 25px",textAlign:"center" }}>
                      <p>Efrei Paris</p>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot style={{ color: "#688A5F" }} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper style={{ padding: "10px 25px",textAlign:"center" }}>
                      <p>Efrei Paris Master</p>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Grid>
            <Grid container>
              <Timeline align="alternate">
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot style={{ color: "#688A5F" }} />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper style={{ padding: "10px 25px",textAlign:"center" }}>
                      <p>Witthy</p>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot style={{ color: "#688A5F" }} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper style={{ padding: "10px 25px",textAlign:"center" }}>
                      <p>Edifixio</p>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Grid>
          </Grid> */}
        </Grid>

        <Grid container justify="center">
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
                  className={classes.skill}
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
                  className={classes.skill}
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
                  className={classes.skill}
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
                  className={classes.skill}
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
                  className={classes.skill}
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
                  className={classes.skill}
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
                  className={classes.skill}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <h3>Javascript</h3>
              </Grid>
              <Grid item>
                <CircularProgress
                  variant="static"
                  value={75}
                  thickness={10}
                  size={80}
                  className={classes.skill}
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
                  className={classes.skill}
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
