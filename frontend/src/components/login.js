import './login.css';
import { login } from '../redux/actions/login_actions';
import { Box, Button, TextField } from '@material-ui/core';
import Snackbar from '@mui/material/Snackbar'; 
import Alert from '@material-ui/lab/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const response = useSelector((state) => state.login_reducer);

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleClick = () => {
        
        setOpen(true);
    };

    const handleClose = () => {

        setOpen(false);
      };

    const dispatchLogin = () => {

        dispatch(login({email, password}));

        handleClick();
        console.log(open);
        if (response.status === 1) {

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    You have been logged in
                </Alert>
            </Snackbar>
        } else {
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    response.error
                </Alert>
            </Snackbar>
        }
    }

    return (
        <div className='login'>

            <Box 
                border={1}
                borderColor='grey'
                borderRadius={10}
                sx = {{
                    width: '50%',
                    height: '90%',
                    padding: 15,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    borderColor: 'grey.500'
            }}>
                <p className='title'>Projects && Tasks System</p>
                <p className='page-action'>Login</p>
                
                <TextField
                    margin='normal'
                    size='small'
                    required
                    id='email'
                    label='Email Address'
                    placeholder='Email address'
                    type='email'
                    variant='outlined'
                    autoComplete='email'
                    autoFocus
                    value = {email} 
                    onChange = {onEmailChange}
                />

                <TextField
                    margin='normal'
                    size='small'
                    required
                    id='password'
                    label='Password'
                    placeholder='Password'
                    type='password'
                    variant='outlined'
                    value = {password} 
                    onChange ={onPasswordChange}
                />

                <Button variant="contained" color="primary" onClick = { dispatchLogin }>Sign In</Button>

                <div className='forgot-password'>
                    <Link to = "#">
                        <p>Forgot Password</p>
                    </Link>
                </div>
                    <p>No account? Sign up  <Link to = "/signup">here.</Link></p>
            </Box>
        </div>
    )
}

export default Login;