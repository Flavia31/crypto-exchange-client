import AddIcon from '@mui/icons-material/Add'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { LoginPage } from './pages/login-page/LoginPage.js';
import { useLocation } from "react-router-dom"

export default function App() {

  let isLogin = true;
  const sampleLocation = useLocation();
  console.log(sampleLocation.pathname);
  if (sampleLocation.pathname === '/') {
    isLogin = true;
  } else {
    isLogin = false;
  }
  
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static"  color="header">
          <Toolbar className='header'>
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', marginLeft: 10 }}>
              <Typography variant="h5" sx={{ flexGrow: 1 }} style={{fontWeight: 100}}>
                Cripto Exchange
              </Typography>
              <Typography variant="h8" sx={{ flexGrow: 1 }}  style={{marginLeft: 25, fontSize: 12, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
                by <b style={{marginInline: 4}}>Cognizant</b> Soft <b>Vision</b>
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', marginX: isLogin ? 80 : 10, marginY: isLogin ? 20 : 10 }}>
        <LoginPage></LoginPage>
      </Box>
    </>
  )
}
