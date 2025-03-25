import React from "react";
import "./style.css";
import COLOR from "../../config/color";
import { useNavigate } from "react-router-dom";
import { ImProfile } from "react-icons/im";
import { AiFillProfile } from "react-icons/ai";

function CustomNavbar() {
  const navigate = useNavigate();
  const links = [
    { title: "Home", path: "/home" },
    { title: "About us", path: "/about" },
    { title: "jobs", path: "/jobs" },
    { title: "blog", path: "/blog" },

  ];
  return (
    <div className="CustomNavbarBaseContainer">
      <div className="CustomNavbarLogoContainer">
        <ImProfile 
      
          className="navbarLogoIcon"
          size={40}
          color={COLOR.white}
          />
          <h2>job portal</h2>
      </div>
      <div className="CustomNavbarLinkContainer">
        {links.map((item) => {
          return <p onClick={() => navigate(item.path)}>{item.title}</p>;
        })}
      </div>
      <div className="CustomNavbarProfileContainer">
        < AiFillProfile size={40} color={COLOR.white} />
      </div>
    </div>
  );
}
export default CustomNavbar;