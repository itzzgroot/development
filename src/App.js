import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/Register/register";
import './App.css';
import Login from './Components/Login/login';
import Applications from './Components/Applications/myapps';
import Documents from './Components/Documents/document';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/document" element={<Documents />} />
      <Route path="/register" element={<Register />} />
      <Route path="/myapps" element={<Applications />} />
      </Routes>
    </BrowserRouter>   
  );
}

export default App;
