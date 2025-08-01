import{ BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import TaskList from './pages/TaskList';
import AddTask from './pages/AddTask';

function App() {
  return (
    <BrowserRouter>
    <nav>
      <NavLink to="/"><button>Lista task</button></NavLink>
      <NavLink to="/add"><button>Aggiungi Task</button></NavLink>
    </nav>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/add" element={<AddTask />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
