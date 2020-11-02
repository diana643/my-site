import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { Grid, Button, Dialog } from "@material-ui/core"
import DialogContent from "@material-ui/core/DialogContent"

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "320px",
    height: "280px",
    transition: "0.2s",
    "& .backWrap": {
      height: "280px",
      width: "100%",
      backgroundColor: "rgba(104,138,95,0.8)",
      display: "none",
      zIndex: "2",
      transition: "0.2s ease",
    },
    "&:hover": {
      transform: "scale(1.1)",
      "& .backWrap": {
        display: "flex",
      },
    },
  },
  title: {
    fontFamily: "Raleway",
    fontSize: "25px",
    fontWeight: "600",
  },
  btn: {
    color: "#fff",
  },
}))

function ProjectCard(props) {
  const classes = useStyles()

  const [fullWidth] = React.useState(true)
  const [maxWidth] = React.useState("md")
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Card className={classes.root}>
      <div className="backWrap">
        <Grid container justify="center" alignItems="center" direction="column">
          <Grid item>
            <p style={{ color: "#eee", textAlign: "center",padding: "0 10px"}}>
              {props.description}
            </p>
          </Grid>
          <Grid item>
            <Button className={classes.btn} onClick={handleClickOpen}>
              Know more
            </Button>
          </Grid>
        </Grid>
      </div>
      <CardContent style={{ zIndex: "1" }}>
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

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        <DialogContent>
          <Grid container justify="center" alignItems="center">
            <Grid item>
              <img src={props.src} style={{ width: "100%" }} alt="" />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Card>
  )
}

export default ProjectCard
