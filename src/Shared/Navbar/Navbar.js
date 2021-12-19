import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // navlink styles
  const customStyle = {
    textDecoration: "none",color:"#000000", display:"block", textTransform: "capitalize",fontSize:"16px"
  };
  const activeStyle = {
    ...customStyle, color:'red',
  };

  return (
    <AppBar sx={{ px: 6, py: 0, background: 'transparent', boxShadow: 'none' }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Large Device Logo*/}
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ fontWeight:"700", color: "#f10e66", mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            CyberTECH
          </Typography>

          {/* Small Device */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: '#000' }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink
                to="/home"
                style={({ isActive }) =>
              isActive ? activeStyle : customStyle
            }>
                Home
              </NavLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink
                to="/dashboard"
                style={({ isActive }) =>
              isActive ? activeStyle : customStyle
            }>
                Dashboard
              </NavLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                {user.email ?
                  <Button onClick={logOut} variant="contained">LogOut</Button>
                  :
                  <NavLink
               to="/login"
                style={({ isActive }) =>
              isActive ? activeStyle : customStyle
            }>
                Login
              </NavLink>
                }
              </MenuItem>
            </Menu>
          </Box>

          {/* Small Device Logo*/}
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{fontWeight:"700", color: "#f10e66", flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            CyberTECH
          </Typography>

          {/* Large Device */}
          <Box onClick={handleCloseNavMenu} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button>
              <NavLink
                to="/home"
                style={({ isActive }) =>
              isActive ? activeStyle : customStyle
            }>
                Home
              </NavLink>
            </Button>
            <Button>
              <NavLink
                to="/register"
                style={({ isActive }) =>
              isActive ? activeStyle : customStyle
            }>
                Register
              </NavLink>
            </Button>
            <Button>
              <NavLink
                to="/dashboard"
                style={({ isActive }) =>
              isActive ? activeStyle : customStyle
            }>
                Dashboard
              </NavLink>
            </Button>
            {user.email ?
              <Button onClick={logOut} variant="contained" sx={{backgroundColor:'#ed1d61'}}>LogOut</Button>
              :
              <Button>
              <NavLink
               to="/login"
                style={({ isActive }) =>
              isActive ? activeStyle : customStyle
            }>
                Login
              </NavLink>
            </Button>
            }
          </Box>
			
          <Box sx={{ flexGrow: 0, display:'flex', alignItems:'center' }}>
			  {user.email && <Typography
			  sx={{color:'#000000', mx:3}}
            variant="subtitle1"
          >
		  Hi, {user?.displayName}
			  </Typography>}
		  <Avatar alt="Remy Sharp" src={user?.photoURL} />
		  {/*
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
			*/}
          </Box>
		  
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
