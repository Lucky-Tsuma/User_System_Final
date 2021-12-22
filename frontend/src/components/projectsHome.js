import './projectsHome.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteProject } from '../redux/actions/delete_project_actions';
import { Button } from '@material-ui/core';
import AdminNavBar from './adminNavBar';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProjects } from '../redux/actions/projects_actions';

const ProjectsHome = () => {

    const dispatch = useDispatch();
    const projects = useSelector((state) => state.projects_reducer.response);

    const delete_project = (project_id) =>{

        dispatch(deleteProject({project_id}));
    }

    useEffect(() => {
        dispatch(getProjects())
    }, [dispatch]);

    return(
        <div className='body'>
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
                        <Button style={{ color: '#000000'}} variant="outlined" size ="small"  >View tasks</Button>
                    </div>
                    <div className='add_task'>
                        <Button style={{ color: '#000000'}} variant="outlined" size ="small" >Add task</Button>
                    </div>
                </div>
                ))}  
            </div>
        </div>
    )
}

export default ProjectsHome;