import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Moving from '@mui/icons-material/Moving';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountBox from '@mui/icons-material/AccountBox';
import Typography from '@mui/material/Typography';
import {  Button, Avatar } from "@mui/material";
import avatar from '../static/avatar.png';
import './DrawerStyle.css';
import {Link} from 'react-router-dom'

const drawerWidth = '100%';
const drawerLinks = [{
  text: 'Transaction history',
  path: '/'
}, {
  text: 'Currency ratio history',
  path: '/'
}, {
  text: 'Profile',
  path: '/'
}] 

export function ResponsiveDrawer(props) {
  const logout = () => {
    console.log('TODO: Implement the logout function')
  }

  const drawer = (
    <div className='drawer-wrapper '>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingTop: 3 }}>
            <Avatar alt="Av" src={avatar}  sx={{ width: 150, height: 150, marginBottom: 2 }} />
            <Typography variant="h6">John Doe</Typography>
            <Typography>Joined 02/06/2022</Typography>
        </Box>
      <List>
        {drawerLinks.map((link, index) => (
          <ListItem key={link.text} disablePadding>
            <ListItemButton component={Link} to={link.path}>
              <ListItemIcon>
                {index !== 2 ? <Moving /> : <AccountBox />}
              </ListItemIcon>
              <ListItemText primary={link.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button color="secondary" variant="contained" onClick={logout} component={Link} to="/">Logout</Button>
    </div>
  );

  return (
    <Box sx={{ display: 'flex', height: '100%'}}>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, position: 'relative' },
          }}
          open
        >
          {drawer}
        </Drawer>
    </Box>
  );
}

export default ResponsiveDrawer;
