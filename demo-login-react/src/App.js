import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/Login'>Login</Link>
        </li>
        <li>
          <Link to='/Register'>Register</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
