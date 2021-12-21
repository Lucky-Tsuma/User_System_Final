import './tasksHome.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AdminNavBar from './adminNavBar';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const TasksHome = () => {

    const tasks_data = useSelector((state) => state.tasks_reducer.response);

    const [tasks, setTasks] = useState(tasks_data);

    useEffect(() => {
        setTasks(tasks_data);
    }, [tasks_data]);

    return(
        <div className='body'>
            <div className='tasks_home'>
                <AdminNavBar />
                {tasks.map((task) => (
                    <div key = {task.task_id} className='task'>
                        <div className='top'>
                            <div className='taskname'>{task.task_name}</div>
                            <div className='user-name'>{task.username}</div>
                            <div className='projectname'>{task.project}</div>
                            <div className='delete_icon'>
                                <IconButton aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                        </div>
                        <div className='bottom'>
                            <div className='task-description'>{task.task_description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TasksHome;