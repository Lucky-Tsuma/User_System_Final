import './signup.css';
import { registerUser } from '../redux/actions/register_actions'
import { Box, Button, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [firstname, setFirstname] = useState(""); 
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const role = 'user';
    const dispatch = useDispatch();

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
                <p>Create new account</p>
                
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
                    dispatch(registerUser({firstname, lastname, email, phone, role, password, confirmPassword}))
                    }}>Sign Up</Button>

                    <p>Back to <Link to = "/">login </Link>page</p>
            </Box>
        </div>
    )
}

export default Signup;