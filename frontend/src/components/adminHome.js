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
                
            </div>
        </div>
    )
}

export default AdminHome;