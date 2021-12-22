import './usersHome.css';
import IconButton from '@mui/material/IconButton';
import { deleteUser } from '../redux/actions/delete_user_actions';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@material-ui/core';
import AdminNavBar from './adminNavBar';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUsers } from '../redux/actions/users_actions';

const UsersHome = () => {

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users_reducer.response);

    const delete_user = (user_id) =>{

        dispatch(deleteUser({user_id}));
    }

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return(
        <div className='body'>
            <div className='users_home'>
                <AdminNavBar />
                {users.map((user) => (
                    <div key = {user.user_id} className='user'>
                        <div className='top'>
                            <div className='firstname'>{user.firstname}</div>
                            <div className='lastname'>{user.lastname}</div>
                            <div className='email'>{user.email}</div>
                            <div className='phone'>{user.phone}</div>
                            <div className='role'>{user.role}</div>
                            <div className='delete_icon'>
                                <IconButton aria-label="delete">
                                    <DeleteIcon onClick={()=>delete_user(user.user_id)}/>
                                </IconButton>
                            </div>
                        </div>
                        <div className='bottom'>
                            <div className='project'>{user.project}</div>
                            <div className='assign_project'>
                                <Button style={{ color: '#000000'}} variant="outlined" size ="small"  >Assign Project</Button>
                            </div>
                            <div className='assign_task'>
                                <Button style={{ color: '#000000'}} variant="outlined" size ="small"  >Assign Task</Button> 
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UsersHome;