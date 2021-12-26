import './login.css';
import { login } from '../redux/actions/login_actions';
import { Box, Button, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const response = useSelector((state) => state.login_reducer);
    const user = JSON.parse(sessionStorage.getItem('user'));

    useEffect(()=> {
        function redirect() {

            if (response.status === 1) {
    
                toast(`Login successfull`, {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
        
                user.role === 'admin' ? navigate ('/adminHome') : navigate ('/normalUserHome')
            } 
            if(response.status === 0 && response.error != null) {
                toast.error(`${response.error}`, {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
        redirect();
    }, [response]);

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const dispatchLogin = () => {

        dispatch(login({email, password}));
        
    }

    return (
        <div className='login'>

            <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />

            <Box 
                border={1}
                borderColor='grey'
                borderRadius={10}
                sx = {{
                    width: '50%',
                    height: '70%',
                    padding: 15,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    borderColor: 'grey.500'
                }}>


                <p className='project-name'>Projects && Tasks System</p>
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