import './adminHome.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@material-ui/core';
import AdminNavBar from './adminNavBar';

const AdminHome = () => {

    return(
        <div className='body'>
            <div className='admin_home'>
                <AdminNavBar />
                <div className='project'>
                    <div className='project_name'>Sample Project name here</div>
                    <div className='delete_icon'>
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                    </div>
                    <div classname='view_tasks'>
                        <Button style={{ color: '#000000'}} variant="outlined" size ="small"  >View tasks</Button>
                    </div>
                    <div classname='add_task'>
                        <Button style={{ color: '#000000'}} variant="outlined" size ="small" >Add task</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminHome;