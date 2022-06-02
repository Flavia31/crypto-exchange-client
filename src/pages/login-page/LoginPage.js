import { Typography, TextField, FormGroup, Button, Divider } from "@mui/material";
import { styled } from '@mui/material/styles';
import './LoginPage.css';
import '../../'
import * as Request from '../../services/requests'

export function LoginPage() {

  const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));

  const login = () => {
    Request.post("login", { username: "Flavia1234", password: "123456"})
  }

  const loginWithGoogle = () => {
    Request.get("google")
  }
  const loginWithGitHub = () => {
    Request.get("github")
  }

    return (
      <main className="login-page">
        <Typography variant="h2" className="login-title">Login</Typography>
        <Root>
          <FormGroup className="form-group">
            <TextField id="username" label="Username" variant="outlined" color="header" />
            <TextField id="password" label="Password" variant="outlined" color="header" type='password' />
            <Button variant="contained" color="header" onClick={login}>LOGIN</Button>
          </FormGroup>
          <Divider variant="inset" textAlign="center" style={{margin: 0, color:"#e0e0e0"}}>Or</Divider>
          <Button color="secondary" variant="contained" className="login-button" onClick={loginWithGitHub}>LOGIN WITH GITHUB</Button>
          <Button color="secondary" variant="contained" className="login-button" onClick={loginWithGoogle}>LOGIN WITH GOOGLE</Button>
        </Root>
        <Typography variant="subtitle-1" className="login-register-text">Don’t have an account? Register<Button className="login-register-button">here</Button></Typography>
      </main>
    );
  }