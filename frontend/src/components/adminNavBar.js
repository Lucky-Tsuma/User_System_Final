import './adminNavBar.css';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';
import { getProjects } from '../redux/actions/projects_actions';
import { getTasks } from '../redux/actions/tasks_actions';
import { getUsers } from "../redux/actions/users_actions";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';


const AdminNavBar = () => {

    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.login_reducer.userDetails);

    const [user, setUser] = useState(userDetails);

    useEffect(() =>{
        setUser(userDetails)
    });


    const clearToken = () => {

		sessionStorage.setItem('token', null);
    }

    const fetchProjects = () => {

        dispatch(getProjects());
    }

    const fetchTasks = () => {

        dispatch(getTasks());
    }

    const fetchUsers = () => {

        dispatch(getUsers());
    }

    return(
        <div className='navbar'>
            <div className='title'>Admin Panel</div>
            <div className='username'>
                <div className='firstname'>{user.firstname}</div>
                <div className='lastname'>{user.lastname}</div>
            </div>
            <div className='menu'>
                <div className='home'>
                    <Link to = "/adminhome" style={{ textDecoration: 'none' }}><p className='menu-item'>Home</p></Link>
                </div>
                <div className='projects'>
                    <Link to = "/projectsHome" style={{ textDecoration: 'none' }} onClick={fetchProjects}><p className='menu-item'>Projects</p></Link>
                </div>
                <div className='tasks'>
                    <Link to = "/tasksHome" style={{ textDecoration: 'none' }} onClick={fetchTasks}><p className='menu-item'>Tasks</p></Link>
                </div>
                <div className='users'>
                    <Link to = "/usershome" style={{ textDecoration: 'none' }} onClick={fetchUsers}><p className='menu-item'>Users</p></Link>
                </div>
                <div className='logout'>  
                    <Link to = "/"><p className='menu-item'><LogoutOutlinedIcon onClick={clearToken}/></p></Link>
                </div>
            </div>
        </div>
    )
}

export default AdminNavBar;

