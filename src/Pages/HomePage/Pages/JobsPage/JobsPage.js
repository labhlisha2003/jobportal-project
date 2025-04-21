import React from "react";
import "./style.css";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import CustomButton from "../../../../components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom"; // Make sure to import from 'react-router-dom'
import { IoStarSharp } from "react-icons/io5";
import COLOR from "../../../../config/color";
import { RiStarSLine } from "react-icons/ri";
import { SiComma } from "react-icons/si";
import { BsStarHalf } from "react-icons/bs";

function JobsPage() {
  

  const navigate = useNavigate();

  const gotojobs = () => {
    
     navigate('/fresher');
   };
   const handlebutton =() =>{
    navigate("/fresher")
   }

  return (
    <div className="Container">
      <h1>INDIA'S#no.1 JOB PLATFORM</h1>
      <h2>Your Dream Job Ends Here.....</h2>
      <h1>Discover 50Lakh+career opportunities.</h1>

      <div className="jobPageInputContainer">
        <input placeholder="title" />
        <input placeholder="experience" />
        <input placeholder="location" />
        <CustomButton backgroundColor={"var(--baseColor)"} title={"Search Jobs"} color={"white"} onClick={handlebutton}/>
      </div>

      <div className="BaseContainerrrr">
        <section className="firstContainer">
          <div className="Firstgrid">
            <h1>Popular Search On Our Job Portal</h1>
          </div>
          <div className="secondContainer">
            <div style={{ flex: 0.8 }}>
              <h1>#Trending At 1.</h1>
              <h2>Job For Freshers</h2>
              <img src={require("../../../../assets/images/frehersimage.jpg")} />
            </div>
            <div style={{
              backgroundColor: "red", display: "flex", alignItems: "center", justifyContent: "flex-end", marginRight: "40px"
            }}>
              <button className="button" onClick={gotojobs}>
                View All
              </button>
            </div>
          </div>
          <div className="thirdContainer">
            <div style={{ flex: 0.8 }}>
              <h1>#Trending At 2.</h1>
              <h2>Work from home jobs</h2>
            </div>
            <img src={require("../../../../assets/images/workfromhome.jpg")} />
          </div>
          <div style={{ backgroundColor: "blueviolet", display: "flex", alignItems: "center", justifyContent: "flex-end", marginRight: "10px" }}>
            <button className="Secondbutton" onClick={gotojobs}>
              View All
            </button>
          </div>

        </section>

        <div className="ContentBaseeeContainer">
          <section className="Contentbox">
            <div className="FirstContentbox">
              <h1>#Trending At 3.</h1>
              <h2>Part Time Job</h2>
              <img src={require("../../../../assets/images/partjobimage.jpg")} />
            </div>
            <div style={{ backgroundColor: "green", display: "flex", alignItems: "center", justifyContent: "flex-end", marginRight: "40px" }}>
              <button className="Thirdbutton" onClick={gotojobs}>
                View All
              </button>
            </div>
            <div className="SecondContentbox">
              <h1>#Trending At 4.</h1>
              <h2>Jobs For Women</h2>
              <img src={require("../../../../assets/images/womenjobs.jpg")} />
              <button className="Fourthbutton" onClick={gotojobs}>
                View All
              </button>
            </div>
            <div className="ThirdContentbox">
              <h1>#Trending At 5.</h1>
              <h2>Full Time Job</h2>
              <img src={require("../../../../assets/images/fulltimejobimage.jpg")} />
              <button className="Fivebutton" onClick={gotojobs}>
                View All
              </button>
            </div>
          </section>
        </div>

        <div className="LastContainer">
          <div className="khisjkasnkjs">
            <h1>Let's Readout Reviews</h1>
            <IoStarSharp className="icon" size={40} color={COLOR.whiteColor} />
            <IoStarSharp size={40} color={COLOR.whiteColor} />
            <IoStarSharp size={40} color={COLOR.whiteColor} />
            <IoStarSharp size={40} color={COLOR.whiteColor} />
            <RiStarSLine size={40} color={COLOR.whiteColor} />
            <div className="firsttext">
              <h2>Join Our Community of satisfied +lakhs job seekers.</h2>
              <SiComma size={55} color={COLOR.whiteColor} />
            </div>
          </div>
          <div className="secondLastContainer">
            <div className="ugyhgyg">
              <h2>Shivangi Mehra</h2>
              <img src={require("../../../../assets/images/picimage1.jpg")} />
              <IoStarSharp className="icon" size={40} color={COLOR.yellowColor} />
              <IoStarSharp size={40} color={COLOR.yellowColor} />
              <IoStarSharp size={40} color={COLOR.yellowColor} />
              <IoStarSharp size={40} color={COLOR.yellowColor} />
              <RiStarSLine size={40} color={COLOR.yellowColor} />
              <p>"Thanks job portal for helping me find a job without much hassle. If you are a fresher or a skilled person with expert knowledge in a specific field, you can easily find a job through the job portal."</p>
            </div>
            <div className="aloisl">
              <h2>Kanav Thakur</h2>
              <img src={require("../../../../assets/images/picimage2.jpg")} />
              <IoStarSharp className="icon" size={40} color={COLOR.yellowColor} />
              <IoStarSharp size={40} color={COLOR.yellowColor} />
              <IoStarSharp size={40} color={COLOR.yellowColor} />
              <IoStarSharp size={40} color={COLOR.yellowColor} />
              < BsStarHalf size={36} color={COLOR.yellowColor} />
              <p>"This app is very helpful if you are looking for a job and the team is also very supportive and friendly. They guided me through every stage. It is very easy to find a job on Apna because there are a lot of job options here for everyone. I got a job interview call very quickly after applying."</p>
            </div>
            <div className="lkeojdwjokd">
              <h2>Athrav Sharma</h2>
              <img src={require("../../../../assets/images/pic3.jpg")} />
              <IoStarSharp className="icon" size={40} color={COLOR.yellowColor} />
              <IoStarSharp size={40} color={COLOR.yellowColor} />
              <IoStarSharp size={40} color={COLOR.yellowColor} />
              <IoStarSharp size={40} color={COLOR.yellowColor} />
              <IoStarSharp size={36} color={COLOR.yellowColor} />
              <p>"It is definitely a great app with correct and true information on the job details. I am happy to use it and I would also recommend my friends to use it for their career development."</p>
            </div>
            <div className="wjhudd">
              <h2>Kashvi Aloona</h2>
              <img src={require("../../../../assets/images/pic4.jpg")} />
              <IoStarSharp className="icon" size={40} color={COLOR.yellowColor} />
              <IoStarSharp size={40} color={COLOR.yellowColor} />
              <IoStarSharp size={40} color={COLOR.yellowColor} />
              <IoStarSharp size={40} color={COLOR.yellowColor} />
              <RiStarSLine size={40} color={COLOR.yellowColor} />
              <p>"Good and helpful app, even for freshers who don't have good qualifications. There are jobs for Caretakers, Househelp and many more. It's very easy to find jobs here. Thank you job portal!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobsPage;
