import MenuIcon from '@mui/icons-material/Menu';
import { Button, List, ListItem, ListItemText } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const linkStyle={
	textDecoration: 'none', color:'#000000', fontWeight:'500'
}
// #ed1e79, #f10e66, #f20452, #f10c3e, #ed1c27

// dashboard drawer
const drawerWidth = 200;
function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { logOut, admin, user } = useAuth();
    
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            {!admin && <List>
                <ListItem  button >
                    <ListItemText>
						<Link style={linkStyle} to="/">
								Home
						</Link>
					</ListItemText>
                </ListItem>
                <Divider />
                <ListItem  button >
                    <ListItemText>
                        <Link style={linkStyle} to={`/dashboard/pay`}>Pay</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem  button >
                    <ListItemText>
                        <Link style={linkStyle} to={`/dashboard/myOrders`}>My Orders</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem  button >
                    <ListItemText>
                        <Link style={linkStyle} to={`/dashboard/review`}>Review</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem  button >
                    <ListItemText>
                    <Button sx={{backgroundColor:'#ed1c27'}} onClick={logOut} variant="contained">LogOut</Button>
                    </ListItemText>
                </ListItem>
                <Divider />
            </List>}
            {admin && <List>
                <ListItem  button >
					<ListItemText>
						<Link style={linkStyle} to="/">
								Home
						</Link>
					</ListItemText>
                </ListItem>
                <Divider />
                <ListItem  button >
                    <ListItemText>
                        <Link style={linkStyle} to={`/dashboard/manageAllOrders`}>Manage All Orders</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem  button >
                    <ListItemText>
                        <Link style={linkStyle} to={`/dashboard/addService`}>Add A Service</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem  button >
                    <ListItemText>
                        <Link style={linkStyle} to={`/dashboard/makeAdmin`}>Make Admin</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem  button >
                    <ListItemText>
                        <Link style={linkStyle} to={`/dashboard/manageServices`}>Manage All Services</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem  button >
                    <ListItemText>
                    <Button sx={{backgroundColor:'#ed1c27'}} onClick={logOut} variant="contained">LogOut</Button>
                    </ListItemText>
                </ListItem>
                <Divider />
            </List>}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` }, background: '#f10e66'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
				<Box sx={{p:5}} >
					<Typography variant="h4" gutterBottom component="div">
						Welcome to Your Dashboard
					  </Typography>
					<Typography variant="h5" gutterBottom component="div">
						{ user.displayName }
					  </Typography>
				</Box>
                    <Outlet/>
            </Box>
        </Box>
    );
};

export default Dashboard;
