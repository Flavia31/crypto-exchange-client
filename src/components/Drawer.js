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
import './DrawerStyle.css'

const drawerWidth = 240;

export function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className='drawer-wrapper '>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingTop: 3 }}>
            <Avatar alt="Av" src={avatar}  sx={{ width: 150, height: 150, marginBottom: 2 }} />
            <Typography variant="h6">John Doe</Typography>
            <Typography>Joined 02/06/2022</Typography>
        </Box>
      <List>
        {['Transaction history', 'Currency ratio history', 'Profile'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {text !== 'Profile' ? <Moving /> : <AccountBox />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button color="secondary" variant="contained">Logout</Button>
    </div>
  );

  return (
    <Box sx={{ display: 'flex', height: '100%'}}>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%', position: 'relative' },
          }}
          open
        >
          {drawer}
        </Drawer>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
