import React, { Fragment } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Footer from "../components/footer"
import CircularProgress from "@material-ui/core/CircularProgress"
import Header from "../components/header"

const useStyles = makeStyles(theme => ({
  root: {
    margin: "100px 10rem",
    [theme.breakpoints.down("sm")]: {
      margin: "65px 2rem",
    },
  },
  title: {
    WebkitTextStroke: "1px #000",
    color: "#FFFAF4",
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
  link: {
    fontWeight: "500",
    textDecoration: "none",
    color: "#000",
    transition: "0.2s ease",
    "&:hover": {
      backgroundColor: "#688A5F",
      color: "#f8f8f8",
      fontWeight: "500",
    },
  },
}))

export default () => {
  const classes = useStyles()

  return (
    <Fragment>
      <Header />
      <div className={classes.root}>
      
        <Grid container justify="center">
          <h1 className={classes.title}>About me</h1>
        </Grid>
        <Grid container>
          <Grid>
            <Grid container>
              <p className={classes.context}>
                Hi, my name is Sian. I'm a recent engineering school graduate,
                currently based in Paris . I have a broad range of interests,
                and a mix of technical and creative skills that allows me to
                excel in web development and UI/UX design . Visual arts and
                music are my main passions. I express them by drawing as well as
                maintaining a
                <a
                  className={classes.link}
                  href="https://mp.weixin.qq.com/s?__biz=MzU1NDk1NzY3MQ==&mid=2247483882&idx=1&sn=686af7bc2343cad855d03295f6a302d3&chksm=fbdaefe2ccad66f46b0bc7eeaea1295746cefd8c8d9a4ce942abd497a384f775800eb79008ab&token=624714504&lang=zh_CN#rd"
                >
                  {" "}
                  music Wechat blog
                </a>
                and hosting a podcast,
                <a className={classes.link} href="https://anchor.fm/diana643">
                  {" "}
                  Liang Qiang
                </a>
                .and participating in another one, titled
                <a
                  className={classes.link}
                  href="https://www.mixcloud.com/normiefm/normiefm-003-diana-l/"
                >
                  {" "}
                  Normie.fm
                </a>{" "}
                . I am also an inveterate fan of all things fluffy, from rabbits
                to alpacas.
              </p>
            </Grid>
            <Grid container justify="center">
              <h1 className={classes.title}>Education</h1>
            </Grid>
            <Grid container>
              <p className={classes.context}>
                I am a graduate of the Beijing University of Technology and
                EFREI Paris. I got my Computer Science Bachelor's degree in 2018
                and my Master's degree in Imaging and Virtual Reality in 2020.
                During my studies, I discovered a strong interest for design and
                front-end development. After three years of studies in France, I
                also acquired a good working knowledge of French, in addition to
                my native Mandarin and fluent English.
              </p>
            </Grid>
            <Grid container justify="center">
              <h1 className={classes.title}>Professional experience</h1>
            </Grid>
            <Grid container>
              <p className={classes.context}>
                My internships have allowed me to experience two very different
                working environments : In 2019, I got my first taste of
                front-end development at a Paris-based Chinese language learning
                start-up named Wiithy. In 2020, for my graduation internship, I
                further improved my development skills by working at Edifixio, a
                French IT consulting company. I thrive in different and dynamic
                environments, and enjoy meeting and cooperating with new people.
                I am familar with several front-end frameworks and design tools,
                and I am used to working with the Agile method. To demonstrate
                my ability, I am now building my personal website,and as you can
                see it's going pretty well!
              </p>
            </Grid>
          </Grid>
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
                  value={85}
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
                  value={70}
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
                  value={70}
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
                  value={85}
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
                <h3>Sketch</h3>
              </Grid>
              <Grid item>
                <CircularProgress
                  variant="static"
                  value={85}
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
                <h3>HTML</h3>
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
                <h3>CSS/SCSS</h3>
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
                <h3>Java</h3>
              </Grid>
              <Grid item>
                <CircularProgress
                  variant="static"
                  value={68}
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
                <h3>GraphQL</h3>
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
    </Fragment>
  )
}
