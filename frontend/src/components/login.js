import './login.css';
import { login } from '../redux/actions/auth_actions'
import { Box, Button, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const dispatchLogin = async () => {
        const response = await axios.post('http://localhost:3001/usersystem/auth/login', {email, password})
        .catch((err) => {console.log(err)});
        dispatch(login(response));
    }


    return (
        <div className='login'>

            <Box 
                border={1}
                borderColor='grey'
                borderRadius={10}
                sx = {{
                    width: '50%',
                    height: '80%',
                    padding: 15,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    borderColor: 'grey.500'
            }}>
                <p>Have an account?</p>
                <p>Login</p>
                
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

                <Button variant="contained" color="primary" onClick = {dispatchLogin}>Sign In</Button>

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