import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { LoginPage } from './pages/login-page/LoginPage.js';
import { useLocation, Routes, Route,} from "react-router-dom";
import { TransactionHistoryPage } from './pages/transaction-history-page/TransactionHistory.js';
import { ResponsiveDrawer } from './components/Drawer.js';
import {useEffect} from 'react'

export default function App() {

  useEffect(() => {
    document.body.style.height = '100vh';
    const root = document.getElementById('root');
    root.style.height = 'calc(100% - 10rem)'

    return () => {
    };
  }, []);

  let isLogin = false;
  const location = useLocation();
  if (location.pathname === '/') {
    isLogin = true;
  }
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
      <Box sx={{ p: 3, display: 'flex', justifyContent: isLogin ? 'center' : 'flex-start', alignItems: isLogin ? 'center' : 'flex-start', marginInline: isLogin ? 60 : 5, marginY: 5, minWidth: isLogin ? 450 : 650, height: '100%'}} backgroundColor="background.paper">
      { !isLogin ? <ResponsiveDrawer/> : null}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/transaction-history" element={<TransactionHistoryPage />} />
        </Routes>
      </Box>
    </>
  )
}
