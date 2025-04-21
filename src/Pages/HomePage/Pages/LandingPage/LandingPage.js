import ASSETS from "../../../../assets";
import React from "react";
import "./style.css";
import { useNavigate} from "react-router";
import CustomButton from "../../../../components/CustomButton/CustomButton";

const LandingPage = () => {
  const navigate=useNavigate;
  const handleNavigation=()=>{
    navigate("apply jobs");
    navigate("see all jobs");
  }
  return (
   <div className="BaseContainer">
    <section className="ContentBaseContainer" >
   <img src={require("../../../../assets/images/HomePage.jpg")}/>
    <div className="Contentwriter">
     <p>"The only way to do great work is to love what you do."</p>
     </div>
     </section>
      <header className="header">
        <h1>See who's hiring in your area.</h1>
        <div className="buttons">
          <CustomButton backgroundColor={"black"} color={"white"} title={"apply jobs"} onclick={handleNavigation}/>
          <CustomButton backgroundColor={"BLACK"} color={"white"} title={"see all jobs"} onclick={handleNavigation} />
        </div>
      </header>
      <section className="categories">
        <div className="category">
        <h3>ENGINEERING</h3>
         <img src={require("../../../../assets/images/Engeeringimage.jpg")} ></img> 
          
          <ul>
            <li>Further Education</li>
            <li>Government & Politics</li>
            <li>Health Engineering</li>
            <li>Higher Education</li>
          </ul>
        </div>
        <div className="category">
          <h3>GRADUATES</h3>
          <img src={require("../../../../assets/images/Graduatesimage.jpg")} ></img> 
          <ul>
            <li>Literature</li>
            <li>Marketing & PR</li>
            <li>Media</li>
            <li>Recruitment</li>
          </ul>
        </div>
        <div className="category">
          <h3>HEALTH</h3>
          <img src={require("../../../../assets/images/Healthimage.jpg")}></img>
          <ul>
            <li>Leisure</li>
            <li>Marketing & PR</li>
            <li>Recruitment</li>
            <li>Sales & FMCG</li>
          </ul>
        </div>
        <div className="category">
          <h3>TECHNOLOGY</h3>
          <img src={require("../../../../assets/images/Technologyimage.jpg")}></img>
          <ul>
            <li>Administration</li>
            <li>Arts & Heritage</li>
            <li>Creative</li>
            <li>Construction</li>
          </ul>
          </div>
    
      </section>
     </div> 
    
    
  );
};

export default LandingPage;
