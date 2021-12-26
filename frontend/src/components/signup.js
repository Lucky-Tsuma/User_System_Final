import './signup.css';
import { registerUser } from '../redux/actions/register_actions'
import { Box, Button, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const [firstname, setFirstname] = useState(""); 
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const role = 'user';
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const response = useSelector((state) => state.registser_reducer);

    useEffect(()=> {
        function redirect() {

            if (response.status === 1) {
    
                toast(`${response.response}`, {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
        
                navigate ('/'); 
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



    const onFirstnameChange = (e) => {
        setFirstname(e.target.value);
    }

    const onLastnameChange = (e) => {
        setLastname(e.target.value);
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPhoneChange = (e) => {
        setPhone(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }

    return (
        <div className='signup'>
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
                    height: '90%',
                    padding: 15,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    borderColor: 'grey.500'
            }}>
                <p className='page-action'>Create new account</p>
                
                <TextField
                    margin='normal'
                    size='small'
                    required
                    id='firstname'
                    label='Firstname'
                    placeholder='Firstname'
                    type='text'
                    variant='outlined'
                    value = {firstname} 
                    onChange = {onFirstnameChange}
                    autoFocus
                />

                <TextField
                    margin='normal'
                    size='small'
                    required
                    id='lastname'
                    label='Lastname'
                    placeholder='Lastname'
                    type='text'
                    variant='outlined'
                    value = {lastname} 
                    onChange = {onLastnameChange}
                />  

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
                    value = {email} 
                    onChange = {onEmailChange}
                />

                <TextField
                    margin='normal'
                    size='small'
                    required
                    id='phone'
                    label='Phone Number'
                    placeholder='Phone number'
                    type='text'
                    variant='outlined'
                    value = {phone} 
                    onChange ={onPhoneChange}
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

                <TextField
                    margin='normal'
                    size='small'
                    required
                    id='confirm-password'
                    label='Confirm password'
                    placeholder='Confirm password'
                    type='password'
                    variant='outlined'
                    value = {confirmPassword} 
                    onChange ={onConfirmPasswordChange}
                />

                
                <Button variant="contained" color="primary" onClick = {() => { 
                    dispatch(registerUser({firstname, lastname, email, phone, role, password}))
                    }}>Sign Up</Button>

                    <p>Back to <Link to = "/">login </Link>page</p>
            </Box>
        </div>
    )
}

export default Signup;