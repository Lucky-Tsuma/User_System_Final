import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/login';
import Signup from './components/signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Login/> } /> 
          <Route path="/signup" element={ <Signup />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
