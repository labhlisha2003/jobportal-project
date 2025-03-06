import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/Loginpage";
import RegisterPage from "./Pages/RegisterPage/Registerpage";
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  
  );
}
export default App;