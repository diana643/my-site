import React, { Fragment } from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import { Grid } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    width: "320px",
    height: "300px",
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  title: {
    fontFamily: "Raleway",
    fontSize:"25px",
    fontWeight: "400"
  }
}))

function ProjectCard(props) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Grid container justify="center">
            <Grid item>
              <h2 className={classes.title}>{props.title}</h2>
            </Grid>
          </Grid>
        </CardContent>
        <div className={classes.img}>
          <img
            src={props.src}
            alt="Logo"
            style={{ width: "100%", objectFit: "scale-down" }}
          />
        </div>
      </CardActionArea>
    </Card>
  )
}

export default ProjectCard
