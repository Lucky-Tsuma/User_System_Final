import './projectsHome.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@material-ui/core';
import AdminNavBar from './adminNavBar';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const ProjectsHome = () => {

    const projects_data = useSelector((state) => state.projects_reducer.response);

    const [projects, setProjects] = useState(projects_data);

    useEffect(() => {
        setProjects(projects_data);
    }, [projects_data]);

    return(
        <div className='body'>
            <div className='project_home'>
                <AdminNavBar />
                {projects.map((project) => ( 
                    <div key = { project.project_name } className='project'>
                    <div className='project_name'>{ project.project_name }</div>
                    <div className='delete_icon'>
                    <IconButton aria-label="delete">
                        <DeleteIcon />
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