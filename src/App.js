
import './Components/TaskList/TaskList.css';
import AddNewTask from './Components/AddNewTask/AddNewTask';
import TaskList from './Components/TaskList/TaskList';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="wrapper">
      <Routes>
      <Route path="/" element={
          <RequireAuth> <AddNewTask></AddNewTask> 
          <TaskList></TaskList>
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        
      </Routes>
       
      
      
      <ToastContainer />
      
    </div>
  );
}

export default App;
