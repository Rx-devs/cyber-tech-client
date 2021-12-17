import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import './App.css';
import AuthProvider from "./Context/AuthProvider";
import Login from "./Pages/Authentication/Login/Login";
import Register from "./Pages/Authentication/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home/> }/>
          <Route path="/home" element={<Home/> }/>
          <Route path="/dashboard" element={<Dashboard/> }/>
          <Route path="/login" element={<Login/> }/>
          <Route path="/register" element={<Register/> }/>
          </Routes>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
