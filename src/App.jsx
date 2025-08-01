import{ BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import TaskList from './pages/TaskList';
import AddTask from './pages/AddTask';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
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
    </GlobalProvider>
  );
};

export default App;
