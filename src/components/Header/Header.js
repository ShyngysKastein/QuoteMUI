import React from 'react';
import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <Box sx={{display: 'flex'}}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{mr: 2, display: {sm: 'none'}}}
          >
            <MenuIcon/>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
          >
            MUI
          </Typography>
          <Navigation/>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;
