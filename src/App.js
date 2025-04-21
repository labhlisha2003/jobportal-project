import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/Loginpage";
import RegisterPage from "./Pages/RegisterPage/Registerpage";
import AboutPage from "./Pages/HomePage/Pages/AboutPage/AboutPage";
import JobsPage from "./Pages/HomePage/Pages/JobsPage/JobsPage";
import BlogPage from "./Pages/HomePage/Pages/BlogPage/BlogPage";
import { NewBlogPage } from "./pages/HomePage/BlogPage/Pages/NewBlogPage/NewBlogPage";
import LandingPage from "./Pages/HomePage/Pages/LandingPage/LandingPage";
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/home" element={<LandingPage />} />
        </Route>
        { <Route path="/new-blog" element={<NewBlogPage />} />}
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>

  );
}
export default App;