import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/Login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
