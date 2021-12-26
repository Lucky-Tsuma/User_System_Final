import './projectsHome.css';
import { getTasksInProject } from '../redux/actions/view_tasks_in_project_actions';
import { addTaskToProject } from '../redux/actions/add_task_to_project_actions';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteProject } from '../redux/actions/delete_project_actions';
import { Button } from '@material-ui/core';
import AdminNavBar from './adminNavBar';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProjects } from '../redux/actions/projects_actions';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
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

const ProjectsHome = () => {

    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [open2, setOpen2] = useState(false);
    const handleClose = () => setOpen(false);
    const handleClose2 = () => setOpen2(false);
    const projects = useSelector((state) => state.projects_reducer.response);
    const tasks = useSelector((state) => state.tasks_reducer.response);

    const tasksInProject = useSelector((state) => state.tasks_in_project_reducer.response);

    const viewTasksInProject = (project_id) => {
        dispatch(getTasksInProject({project_id}));
        setOpen(true);
    };

    const viewAllTasks = (project_id) => {
        setSelectedProject(project_id);
        dispatch(getTasks());
        setOpen2(true);
    }

    const addToProject = (task_id) => {
        const project_id = selectedProject;
        dispatch(addTaskToProject({task_id, project_id}));
        setOpen2(false);
    }

    const delete_project = (project_id) =>{

        dispatch(deleteProject({project_id}));
    }

    useEffect(() => {
        dispatch(getProjects())
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
                        Current tasks
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {tasksInProject.map((task)=>(
                            <div key = {task.task_name} className='task'>
                            <div className='task-title'>
                                {task.task_name}
                            </div>
                            <div className='task-description'>
                                {task.task_description}
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
                            <div key = {task.task_name} className='task'>
                            <div className='task-title'>
                                {task.task_name}
                            </div>
                            <div className='task-description'>
                                {task.task_description}
                            </div>
                            <div>
                            <Button style={{ color: '#000000'}} variant="outlined" size ="small" onClick={()=>addToProject(task.task_id)}>Add to project</Button>
                            </div>
                        </div>
                        ))}
                    </Typography>
                </Box>
            </Modal>
            
            <div className='project_home'>
                <AdminNavBar />
                {projects.map((project) => ( 
                    <div key = { project.project_name } className='project'>
                    <div className='project_name'>{ project.project_name }</div>
                    <div className='delete_icon'>
                    <IconButton aria-label="delete">
                        <DeleteIcon onClick={()=>delete_project(project.project_id)}/>
                    </IconButton>
                    </div>
                    <div className='view_tasks'>
                        <Button style={{ color: '#000000'}} variant="outlined" size ="small" onClick={()=>viewTasksInProject(project.project_id)} >View tasks</Button>
                    </div>
                    <div className='add_task'>
                        <Button style={{ color: '#000000'}} variant="outlined" size ="small" onClick={()=>viewAllTasks(project.project_id)}>Add task</Button>
                    </div>
                </div>
                ))}  
            </div>
        </div>
    )
}

export default ProjectsHome;