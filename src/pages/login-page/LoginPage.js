import { Typography, TextField, FormGroup, Button, Divider, ButtonGroup } from "@mui/material";
import { Formik } from 'formik';
import { styled } from '@mui/material/styles';
import './LoginPage.css';

export function LoginPage() {

  const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));

    return (
      <main className="login-page">
        <Typography variant="h2" className="login-title">Login</Typography>
        <Root>
          <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
              <FormGroup className="form-group">
                <TextField id="username" label="Username" variant="outlined" color="header" />
                <TextField id="password" label="Password" variant="outlined" color="header" type='password' />
                <Button variant="contained" color="header">LOGIN</Button>
              </FormGroup>
          </Formik>
          <Divider variant="inset" textAlign="center" style={{margin: 0}}>Or</Divider>
          <Button color="secondary" variant="contained" className="login-button">LOGIN WITH GITHUB</Button>
          <Button color="secondary" variant="contained" className="login-button">LOGIN WITH GOOGLE</Button>
        </Root>
      </main>
    );
  }