// import ASSETS from "../../assets";
import React from "react";
import "./style.css";

const LandingPage = () => {
  return (
    <div className="container">
      
      <header className="header">
        <h1>See who's hiring in your area.</h1>
        
        <div className="buttons">
          <button className="apply">Apply Jobs</button>
          <button className="see-all">SEE ALL JOBS</button>
        </div>
      </header>
      <section className="categories">
        <div className="category">
          <h3>ENGINEERING</h3>
          <ul>
            <li>Further Education</li>
            <li>Government & Politics</li>
            <li>Health Engineering</li>
            <li>Higher Education</li>
          </ul>
        </div>
        <div className="category">
          <h3>GRADUATES</h3>
          <ul>
            <li>Literature</li>
            <li>Marketing & PR</li>
            <li>Media</li>
            <li>Recruitment</li>
          </ul>
        </div>
        <div className="category">
          <h3>HEALTH</h3>
          <ul>
            <li>Leisure</li>
            <li>Marketing & PR</li>
            <li>Recruitment</li>
            <li>Sales & FMCG</li>
          </ul>
        </div>
        <div className="category">
          <h3>TECHNOLOGY</h3>
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
