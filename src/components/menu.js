import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({

  }));

const menuSmall = (props) => {
    // const [anchorEl, setAnchorEl] = React.useState(null);
  
    // const handleClick = (event) => {
    //   setAnchorEl(event.currentTarget);
    // };
  
    // const handleClose = () => {
    //   setAnchorEl(null);
    // };
  
    return (
      <div>
        <IconButton> <MenuIcon /> </IconButton>
        {/* <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>About me</MenuItem>
          <MenuItem onClick={handleClose}>Projects</MenuItem>
          <MenuItem onClick={handleClose}>Contact</MenuItem>
        </Menu> */}
      </div>
    )
  }

  export default menuSmall;