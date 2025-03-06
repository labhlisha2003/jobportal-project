import './App.css';

import {BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from  "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/Login" element={<LoginPage/>}/>
    <Route path="/Register" element={<RegisterPage/>}/>
    
  </Routes>
  </BrowserRouter>
  );
}

export default App;
