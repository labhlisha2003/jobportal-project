
import './App.css';
import{BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/Register" element={<RegisterPage/>}/>
    
  </Routes>
  </BrowserRouter>
  );
}

export default App;
