"use client"
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import Sidebar from './sidebar';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: "5px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  height:"38px",
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '711px',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  right:"0",
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    height:"38px",
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
        [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Navbar({}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          
        >
        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.38 20.6942L24.435 18.7491C23.9882 18.2681 23.7293 17.6425 23.7055 16.9864V13.157C23.7055 8.23345 20.4232 4.03934 14.5879 4.03934C8.7526 4.03934 5.47025 8.11189 5.47025 13.157V17.4119C5.45899 17.7967 5.3077 18.1641 5.04476 18.4452L2.79574 20.6942C2.56668 20.9187 2.4356 21.2246 2.43103 21.5452V25.9217C2.43103 26.2441 2.55911 26.5533 2.7871 26.7813C3.01508 27.0093 3.3243 27.1374 3.64672 27.1374H10.3938C10.5629 28.1272 11.0767 29.0254 11.8443 29.6729C12.6118 30.3205 13.5837 30.6756 14.5879 30.6756C15.5921 30.6756 16.564 30.3205 17.3315 29.6729C18.0991 29.0254 18.6129 28.1272 18.782 27.1374H25.5291C25.8515 27.1374 26.1607 27.0093 26.3887 26.7813C26.6167 26.5533 26.7448 26.2441 26.7448 25.9217V21.5452C26.7402 21.2246 26.6091 20.9187 26.38 20.6942Z" fill="#53ACFF"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M25.4117 15.0588C29.5701 15.0588 32.9411 11.6878 32.9411 7.52941C32.9411 3.37103 29.5701 0 25.4117 0C21.2534 0 17.8823 3.37103 17.8823 7.52941C17.8823 11.6878 21.2534 15.0588 25.4117 15.0588Z" fill="#118F4B"/>
        <path d="M25.5591 12.12C24.5111 12.12 23.6991 11.752 23.1231 11.016C22.5551 10.28 22.2711 9.248 22.2711 7.92C22.2711 6.488 22.5911 5.38 23.2311 4.596C23.8791 3.812 24.7711 3.42 25.9071 3.42C26.3551 3.42 26.7991 3.504 27.2391 3.672C27.6791 3.832 28.0551 4.064 28.3671 4.368L27.8631 5.52C27.5671 5.248 27.2511 5.048 26.9151 4.92C26.5791 4.784 26.2351 4.716 25.8831 4.716C25.1871 4.716 24.6551 4.96 24.2871 5.448C23.9191 5.936 23.7351 6.664 23.7351 7.632V7.98C23.9031 7.54 24.1751 7.196 24.5511 6.948C24.9271 6.7 25.3591 6.576 25.8471 6.576C26.3351 6.576 26.7671 6.692 27.1431 6.924C27.5191 7.156 27.8151 7.476 28.0311 7.884C28.2471 8.292 28.3551 8.76 28.3551 9.288C28.3551 9.832 28.2351 10.32 27.9951 10.752C27.7631 11.176 27.4351 11.512 27.0111 11.76C26.5951 12 26.1111 12.12 25.5591 12.12ZM25.4751 10.896C25.9071 10.896 26.2551 10.756 26.5191 10.476C26.7911 10.188 26.9271 9.812 26.9271 9.348C26.9271 8.884 26.7911 8.508 26.5191 8.22C26.2551 7.932 25.9071 7.788 25.4751 7.788C25.0431 7.788 24.6911 7.932 24.4191 8.22C24.1551 8.508 24.0231 8.884 24.0231 9.348C24.0231 9.812 24.1551 10.188 24.4191 10.476C24.6911 10.756 25.0431 10.896 25.4751 10.896Z" fill="white"/>
        </svg>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box  bgcolor={"#202020"}>
      <Sidebar handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen}/>
      <AppBar position="fixed"
        sx={{
          width: { sm: `calc(100% - 460px)` , xs:`100%` },
          ml: { sm: `0px` },
          background:{sm:`#202020`, xs:`#202020`},
          left:{md:"40px", xs:"0"},
          boxShadow:"none",
        }}>
        <Toolbar>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' },}}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
          <Typography
            className='navbarLogo'
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, fontWeight:"700" , fontSize:"48px"}}
          >
          ALERTS
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
           <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.38 20.6942L24.435 18.7491C23.9882 18.2681 23.7293 17.6425 23.7055 16.9864V13.157C23.7055 8.23345 20.4232 4.03934 14.5879 4.03934C8.7526 4.03934 5.47025 8.11189 5.47025 13.157V17.4119C5.45899 17.7967 5.3077 18.1641 5.04476 18.4452L2.79574 20.6942C2.56668 20.9187 2.4356 21.2246 2.43103 21.5452V25.9217C2.43103 26.2441 2.55911 26.5533 2.7871 26.7813C3.01508 27.0093 3.3243 27.1374 3.64672 27.1374H10.3938C10.5629 28.1272 11.0767 29.0254 11.8443 29.6729C12.6118 30.3205 13.5837 30.6756 14.5879 30.6756C15.5921 30.6756 16.564 30.3205 17.3315 29.6729C18.0991 29.0254 18.6129 28.1272 18.782 27.1374H25.5291C25.8515 27.1374 26.1607 27.0093 26.3887 26.7813C26.6167 26.5533 26.7448 26.2441 26.7448 25.9217V21.5452C26.7402 21.2246 26.6091 20.9187 26.38 20.6942Z" fill="#53ACFF"/>
<path fillRule="evenodd" clipRule="evenodd" d="M25.4117 15.0588C29.5701 15.0588 32.9411 11.6878 32.9411 7.52941C32.9411 3.37103 29.5701 0 25.4117 0C21.2534 0 17.8823 3.37103 17.8823 7.52941C17.8823 11.6878 21.2534 15.0588 25.4117 15.0588Z" fill="#118F4B"/>
<path d="M25.5591 12.12C24.5111 12.12 23.6991 11.752 23.1231 11.016C22.5551 10.28 22.2711 9.248 22.2711 7.92C22.2711 6.488 22.5911 5.38 23.2311 4.596C23.8791 3.812 24.7711 3.42 25.9071 3.42C26.3551 3.42 26.7991 3.504 27.2391 3.672C27.6791 3.832 28.0551 4.064 28.3671 4.368L27.8631 5.52C27.5671 5.248 27.2511 5.048 26.9151 4.92C26.5791 4.784 26.2351 4.716 25.8831 4.716C25.1871 4.716 24.6551 4.96 24.2871 5.448C23.9191 5.936 23.7351 6.664 23.7351 7.632V7.98C23.9031 7.54 24.1751 7.196 24.5511 6.948C24.9271 6.7 25.3591 6.576 25.8471 6.576C26.3351 6.576 26.7671 6.692 27.1431 6.924C27.5191 7.156 27.8151 7.476 28.0311 7.884C28.2471 8.292 28.3551 8.76 28.3551 9.288C28.3551 9.832 28.2351 10.32 27.9951 10.752C27.7631 11.176 27.4351 11.512 27.0111 11.76C26.5951 12 26.1111 12.12 25.5591 12.12ZM25.4751 10.896C25.9071 10.896 26.2551 10.756 26.5191 10.476C26.7911 10.188 26.9271 9.812 26.9271 9.348C26.9271 8.884 26.7911 8.508 26.5191 8.22C26.2551 7.932 25.9071 7.788 25.4751 7.788C25.0431 7.788 24.6911 7.932 24.4191 8.22C24.1551 8.508 24.0231 8.884 24.0231 9.348C24.0231 9.812 24.1551 10.188 24.4191 10.476C24.6911 10.756 25.0431 10.896 25.4751 10.896Z" fill="white"/>
</svg>
            </IconButton>
          
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}