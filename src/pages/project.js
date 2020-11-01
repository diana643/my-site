import React, { Fragment } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Header from "../components/header"
import Footer from "../components/footer"
import ProjectCard from "../components/projectCard"

const imgs = [
  {
    id: "1",
    src: require("../assets/pics/projects/toolbox_cover.jpg"),
    title: "Toolbox",
    description:
      "Toolbox is a applications storage website which is designed by material design and developped by React",
  },
  {
    id: "2",
    src: require("../assets/pics/projects/aws_cover.jpg"),
    title: "Aws storage",
    description: "It's a files management website and designed by semantic UI",
  },
  {
    id: "3",
    src: require("../assets/pics/projects/table_cover.jpg"),
    title: "Salesforce certifiations",
    description:
      "This is a internal salesforce tool for user checking their salesforce certification score, designed by lighting design",
  },
  {
    id: "4",
    src: require("../assets/pics/projects/stafing_cover.jpg"),
    title: "Stafing",
    description:
      "It's a mobile version of internal project managment tool on salesforce plateform ",
  },
]
const useStyles = makeStyles(theme => ({
  root: {
    margin: "100px 10rem",
    [theme.breakpoints.down("sm")]: {
      margin: "65px 2rem",
    },
  },
  title: {
    textAlign:"center",
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
}))

export default () => {
  const classes = useStyles()

  return (
    <Fragment>
      <Header />
      <div className={classes.root}>
        <Grid container style={{ margin: "60px 0 30px 0" }} justify="center">
          <h1 className={classes.title}>Projects in © Edifixio</h1>
        </Grid>
        <Grid container style={{marginBottom:"30px"}}>
          <p className={classes.context}>
            During my 6 months internship in Edifixio, I have done with a lots
            of projects including development and design. By using React,
            material design and invision studio
          </p>
        </Grid>
        <Grid container justify="space-between" spacing={4}>
          {imgs.map(img => (
            <Grid item xs={12} sm={6} md={4} key={img.id}>
              <ProjectCard
                src={img.src}
                title={img.title}
                description={img.description}
              />
            </Grid>
          ))}
        </Grid>
        <Grid container style={{ margin: "60px 0 30px 0" }} justify="center">
          <h1 className={classes.title}>Personal perject</h1>
        </Grid>
        <Grid container justify="space-between" spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              src={require("../assets/pics/projects/my_website.png")}
              title="Personal website"
              description="This is my personal website, design and develop by myself using Gatsby.js as the frameworks"
            />
          </Grid>
        </Grid>
      </div>

      <Footer />
    </Fragment>
  )
}
