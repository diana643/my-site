import React, { Fragment } from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { Paper } from "@material-ui/core"
import sizeMe from "react-sizeme"
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuButton from "../components/MenuButton"

const useStyles = makeStyles(theme => ({
  root: {
    //flexGrow: 1,
    backgroundColor: "rgb(255,255,255,0.0)",
    height: "60px",
    width: "100%",
  },
  title: {
    textDecoration: "none",
    fontSize: "25px",
    color: "#000",
    fontFamily: "Raleway",
    fontWeight: "300",
    "&:hover": {
      cursor: "pointer",
      color: "#688A5F",
    },
  },
}))

function Header(props) {
  const classes = useStyles()

  const { width } = props.size

  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Fragment>
      <Paper elevation={0} className={classes.root}>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          style={{ padding: "0 35px" }}
        >
          <Grid item>
            <Link to="/" style={{textDecoration: "none",}}>
            <Typography
              variant="h6"
              className={classes.title}
            >
              Welcome
            </Typography>
            </Link>

          </Grid>
          <Grid item>
            {width > 600 ? (
              <Grid container spacing={5}>
                <Grid item>
                  <MenuButton
                  link="/about/" 
                  title="About me" />
                </Grid>
                <Grid item>
                <MenuButton
                  link="/project/" 
                  title="Project" />
                </Grid>
                <Grid item>
                <MenuButton
                  link="/contact/" 
                  title="Contact" />
                </Grid>
              </Grid>
            ) : (
              <Grid container>
                <IconButton onClick={handleClick}>
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  //keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>About me</MenuItem>
                  <MenuItem onClick={handleClose}>Projects</MenuItem>
                  <MenuItem onClick={handleClose} >Contact</MenuItem>
                </Menu>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  )
}

export default sizeMe({ monitorWidth: true })(Header)
