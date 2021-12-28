import './usersHome.css';
import IconButton from '@mui/material/IconButton';
import { deleteUser } from '../redux/actions/delete_user_actions';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@material-ui/core';
import AdminNavBar from './adminNavBar';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getUsers } from '../redux/actions/users_actions';
import { assignProject } from '../redux/actions/assign_project_actions';
import { assignTask } from '../redux/actions/assign_task_actions';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { getProjects } from '../redux/actions/projects_actions';
import { getTasks } from '../redux/actions/tasks_actions';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const UsersHome = () => {

    const [user_id, setUser] = useState(null);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const handleClose = () => setOpen(false);
    const handleClose2 = () => setOpen2(false);
    const users = useSelector((state) => state.users_reducer.response);

    const projects = useSelector((state) => state.projects_reducer.response);
    const tasks= useSelector((state) => state.tasks_reducer.response);


    const viewProjects = (user_id) => {

        dispatch(getProjects());
        setUser(user_id);
        setOpen(true);
    }

    const viewTasks = (user_id) => {

        dispatch(getTasks());
        setUser(user_id); 
        setOpen2(true);       
    }

    const projectAssign = (project_id) => {

        dispatch(assignProject({ user_id, project_id }));
        setOpen(false);
    }

    const taskAssign = (task_id) => {

        dispatch(assignTask({ user_id, task_id }));
        setOpen2(false);
    }


    const delete_user = (user_id) =>{

        dispatch(deleteUser({user_id}));
    }

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return(
        <div className='body'>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Projects
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {projects.map((project)=>(
                            <div key = {project.project_id} className='task'>
                                <div className='task-title'>
                                    {project.project_name}
                                </div>
                                <div>
                                    <Button style={{ color: '#000000'}} variant="outlined" size ="small" onClick={()=>projectAssign(project.project_id)}>Assign</Button>
                                </div>
                            </div>
                        ))}
                    </Typography>
                </Box>
            </Modal>

            <Modal
            open={open2}
            onClose={handleClose2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Tasks
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {tasks.map((task)=>(
                            <div key = {task.task_id} className='task'>
                                <div className='task-title'>
                                    {task.task_name}
                                </div>
                                <div className='task-description'>
                                    {task.task_description}
                                </div>
                                <div>
                                    <Button style={{ color: '#000000'}} variant="outlined" size ="small" onClick={()=>taskAssign(task.task_id)}>Assign</Button>
                                </div>
                            </div>
                        ))}
                    </Typography>
                </Box>
            </Modal>
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
                                <Button style={{ color: '#000000'}} variant="outlined" size ="small" onClick={()=>viewProjects(user.user_id)} >Assign Project</Button>
                            </div>
                            <div className='assign_task'>
                                <Button style={{ color: '#000000'}} variant="outlined" size ="small" onClick={()=>viewTasks(user.user_id)}>Assign Task</Button> 
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UsersHome;