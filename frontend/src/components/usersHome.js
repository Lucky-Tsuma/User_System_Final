import './usersHome.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@material-ui/core';
import AdminNavBar from './adminNavBar';

const UsersHome = () => {

    return(
        <div className='body'>
            <div className='users_home'>
                <AdminNavBar />
                <div className='user'>
                    <div className='top'>
                        <div className='firstname'>Firstname</div>
                        <div className='lastname'>Lastname</div>
                        <div className='email'>emailaddress@domain.com</div>
                        <div className='phone'>+254703766814</div>
                        <div className='role'>Admin</div>
                        <div className='delete_icon'>
                            <IconButton aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    </div>
                    <div className='bottom'>
                        <div className='project'>Project Name</div>
                        <div className='assign_project'>
                            <Button style={{ color: '#000000'}} variant="outlined" size ="small"  >Assign Project</Button>
                        </div>
                        <div className='assign_task'>
                            <Button style={{ color: '#000000'}} variant="outlined" size ="small"  >Assign Task</Button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersHome;