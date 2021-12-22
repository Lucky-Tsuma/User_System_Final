import './adminHome.css';
import { Box, Button, TextField } from '@material-ui/core';
import { createProject } from '../redux/actions/create_project_actions';
import { createTask } from '../redux/actions/create_task_actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import AdminNavBar from './adminNavBar';

const AdminHome = () => {

    const dispatch = useDispatch();

    const [project_name, setProjectName] = useState("");
    const [task_name, setTaskName] = useState("");
    const [task_description, setTaskDescription] = useState("");

    const dispatchProject = () => {

        dispatch(createProject({ project_name }))
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
                                autoFocus
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
                                autoFocus
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