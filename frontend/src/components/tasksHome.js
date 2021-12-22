import './tasksHome.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteTask } from '../redux/actions/delete_task_actions';
import AdminNavBar from './adminNavBar';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getTasks } from '../redux/actions/tasks_actions';

const TasksHome = () => {

    const dispatch = useDispatch();
    const tasks= useSelector((state) => state.tasks_reducer.response);

    const delete_task = (task_id) =>{

        dispatch(deleteTask({task_id}));
    }

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch]);

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
                                    <DeleteIcon onClick={()=>delete_task(task.task_id)}/>
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