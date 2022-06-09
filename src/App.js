import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { LoginPage } from './pages/login-page/LoginPage.js';
import { useLocation, Routes, Route,} from "react-router-dom";
import { TransactionHistoryPage } from './pages/transaction-history-page/TransactionHistory.js';
import { ResponsiveDrawer } from './components/Drawer.js';
import {useEffect} from 'react'
import Register from './pages/register-page/RegisterPage';
import MainPage from 'pages/main-page/MainPage.js';

export default function App() {

  useEffect(() => {

    document.body.style.height = '100vh';
    const root = document.getElementById('root');
    root.style.height = 'calc(100% - 10rem)'

    return () => {
    };
  }, []);

  let isLogin = true;
  const sampleLocation = useLocation();
  if (sampleLocation.pathname === '/' || sampleLocation.pathname === '/register') {
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
      <Box sx={{ p: 3, display: 'flex', justifyContent: isLogin ? 'center' : 'flex-start', alignItems: isLogin ? 'center' : 'flex-start'}} backgroundColor="background.paper">
      { !isLogin ? <ResponsiveDrawer/> : null}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/transaction-history" element={<TransactionHistoryPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </Box>
    </>
  )
}
