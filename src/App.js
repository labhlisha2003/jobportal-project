import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import LoginPage from "./Pages/LoginPage/LoginPage";


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/Register" element={<RegisterPage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
