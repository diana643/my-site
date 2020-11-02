import React, { Fragment } from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { Paper } from "@material-ui/core"
import sizeMe from "react-sizeme"
import MenuIcon from "@material-ui/icons/Menu"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import MenuButton from "../components/MenuButton"
import Logo from "../assets/pics/logo.png"

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

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

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
            <Link to="/" style={{ textDecoration: "none" }}>
              <Grid container justify="flex-start" alignItems="center">
                <Grid item>
                  <img src={Logo} style={{ height: "60px" }} alt="" />
                </Grid>
                <Grid item>
                  <Typography variant="h6" className={classes.title}>
                    Welcome
                  </Typography>
                </Grid>
              </Grid>
            </Link>
          </Grid>
          <Grid item>
            {width > 600 ? (
              <Grid container spacing={5}>
                <Grid item>
                  <MenuButton to="/" title="🏠 Home" />
                </Grid>
                <Grid item>
                  <MenuButton to="/about/" title="👩🏼‍💻 About" />
                </Grid>
                <Grid item>
                  <MenuButton to="/project/" title="👩🏻‍🎨 Portfolio" />
                </Grid>
                <Grid item>
                  <MenuButton to="/likes/" title="💛 Likes" />
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
                  <MenuItem onClick={handleClose}>
                    <MenuButton to="/" title="🏠 Home" />
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <MenuButton to="/about/" title="👩🏼‍💻 About" />
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <MenuButton to="/project/" title="👩🏻‍🎨 Portfolio" />
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <MenuButton to="/likes/" title="💛 Likes" />
                  </MenuItem>
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
