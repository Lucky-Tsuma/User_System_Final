import './adminNavBar.css';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';

const AdminNavBar = () => {

    const clearToken = () => {

		sessionStorage.setItem('token', null);
    }

    return(
        <div className='navbar'>
            <div className='title'>Admin Panel</div>
            <div className='username'>
                <div className='firstname'>Horned</div>
                <div className='lastname'>Owl</div>
            </div>
            <div className='menu'>
                <div className='home'>
                    <Link to = "/adminhome" style={{ textDecoration: 'none' }}><p className='menu-item'>Home</p></Link>
                </div>
                <div className='projects'>
                    <Link to = "#" style={{ textDecoration: 'none' }}><p className='menu-item'>Projects</p></Link>
                </div>
                <div className='tasks'>
                    <Link to = "#" style={{ textDecoration: 'none' }}><p className='menu-item'>Tasks</p></Link>
                </div>
                <div className='users'>
                    <Link to = "/usershome" style={{ textDecoration: 'none' }}><p className='menu-item'>Users</p></Link>
                </div>
                <div className='logout'>  
                    <Link to = "/"><p className='menu-item'><LogoutOutlinedIcon onClick={clearToken}/></p></Link>
                </div>
            </div>
        </div>
    )
}

export default AdminNavBar;

