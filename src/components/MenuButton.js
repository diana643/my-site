import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import { Link } from "@reach/router"

const useStyles = makeStyles(theme => ({
  root: {},
  title: {
    textDecoration: "none",
    color: "#000",
    fontFamily: "Raleway",
    transition: "0.2s",
    "&:hover": {
      color: "#688A5F",
      fontWeight: "500",
      letterSpacing: "2px",
    },
  },
}))

function MenuButton(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Link to={props.link} style={{ textDecoration: "none" }}>
        <Typography variant="h6" className={classes.title}>
          {props.title}
        </Typography>
      </Link>
    </div>
  )
}

export default MenuButton
