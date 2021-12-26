import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/login';
import Signup from './components/signup';
import AdminHome from './components/adminHome';
import UsersHome from './components/usersHome';
import TasksHome from './components/tasksHome';
import ProjectsHome from './components/projectsHome';
import NormalUserHome from './components/normalUser';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Login/> } /> 
          <Route path="/signup" element={ <Signup />} /> 
          <Route path="/adminhome" element={ <AdminHome /> } />
          <Route path="/usershome" element={ <UsersHome /> } />
          <Route path="/tasksHome" element={ <TasksHome /> } />
          <Route path="/projectsHome" element={ <ProjectsHome /> } />
          <Route path="/normalUserHome" element={ <NormalUserHome /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
