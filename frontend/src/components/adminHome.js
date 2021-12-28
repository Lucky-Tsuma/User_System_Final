import './adminHome.css';
import { Box, Button, TextField } from '@material-ui/core';
import { createProject } from '../redux/actions/create_project_actions';
import { createTask } from '../redux/actions/create_task_actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import AdminNavBar from './adminNavBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const AdminHome = () => {

    const dispatch = useDispatch();

    const [project_name, setProjectName] = useState("");
    const [task_name, setTaskName] = useState("");
    const [task_description, setTaskDescription] = useState("");

    const projectResponse = useSelector((state) => state.create_project_reducer);
    const taskResponse = useSelector((state) => state.create_task_reducer);
    const navigate = useNavigate();

    useEffect(() => {

        if(projectResponse.status === 1) {

            toast(`${projectResponse.response}`, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } 

        if(projectResponse.status === 0) {

            toast.error(`${projectResponse.error}`, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        // navigate ('/projectsHome');
    }, [projectResponse]);

    useEffect(() => {

        if(taskResponse.status === 1) {

            toast(`${taskResponse.response}`, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } 

        if(taskResponse.status === 0) {

            toast.error(`${taskResponse.error}`, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        // navigate ('/tasksHome');
    }, [taskResponse]);

    const dispatchProject = () => {

        dispatch(createProject({ project_name }));
    }

    const dispatchTask = () => {

        dispatch(createTask({task_name, task_description}))
    }

    const onProjectNameChange = (e) => {
        setProjectName(e.target.value);
    }

    const onTaskNameChange = (e) => {
        setTaskName(e.target.value);
    }

    const onTaskDescriptionChange = (e) => {
        setTaskDescription(e.target.value);
    }

    return(
        <div className='body'>
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
            <div className='admin_home'>
                <AdminNavBar />
                <Box 
                sx = {{
                    width: '95%',
                    height: '95vh',
                    padding: 15,
                    display: 'flex',
                    justifyContent: 'center',
                    borderColor: 'grey.500'
                }}>
                    <Box 
                    border={1}
                    borderColor='grey'
                    borderRadius={10}
                    sx = {{
                        width: '45%',
                        height: '70vh',
                        padding: 15,
                        margin: 15,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        borderColor: 'grey.500'
                    }}>
                            <p>Create New Project</p>
                            <TextField
                                margin='normal'
                                size='small'
                                required
                                id='projectname'
                                label='Project Name'
                                placeholder='Enter project name'
                                type='text'
                                variant='outlined'
                                value = {project_name} 
                                onChange = {onProjectNameChange}
                            />

                            <Button variant="contained" color="primary" onClick = { dispatchProject }>Create Project</Button>
                        </Box>

                        <Box 
                        border={1}
                        borderColor='grey'
                        borderRadius={10}
                        sx = {{
                            width: '45%',
                            height: '70vh',
                            padding: 15,
                            margin: 15,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            borderColor: 'grey.500'
                        }}>

                            <p>Create New Task</p>
                            <TextField
                                margin='normal'
                                size='small'
                                required
                                id='taskname'
                                label='Task Name'
                                placeholder='Enter task name'
                                type='text'
                                variant='outlined'
                                value = {task_name} 
                                onChange = {onTaskNameChange}
                            />

                            <TextField
                                margin='normal'
                                size='small'
                                required
                                id='taskdescription'
                                label='Task Description'
                                placeholder='Describe task here'
                                type='text'
                                variant='outlined'
                                value = {task_description} 
                                onChange = {onTaskDescriptionChange}
                            />

                            <Button variant="contained" color="primary" onClick = { dispatchTask }>Create Task</Button>
                    </Box>
                </Box>
            </div>
        </div>
    )
}

export default AdminHome;