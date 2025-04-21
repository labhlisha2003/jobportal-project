import React from "react";
import "./style.css";
function AboutPage() {
  return <div className="BaseContainer">
    <div className="FirstBaseContainer">
      <img src={require("../../../../assets/images/aboutpageimage2.jpg")} />
      {/* <h1>Let's Know....</h1>
        <p>welcome to our job portal,your trusted careere partner.we can dedicated to bridging the gap between job seekers and emplyoees,making the hiring process smooth,effiecientand rewarding for everyone.whether ypu are looking for your dreamjobor perfect candidate we are here.</p> */}
    </div>
    <div className="SecondBaseContainer">
      <section className="boxes">
        <div className="Smallboxes">
          <img src={require("../../../../assets/images/whychooseimage.jpg")} />
        </div>
        <div className="Smallboxes">
          <h2>Why Choose Us?</h2>
          <h3>(1)AI-powered job matching.</h3>
          <h3>(2)verified employees &job listing.</h3>
          <h3>(3)user-Friendly Experience.</h3>
          <h3>(4)Career resouces&guidance.</h3>
        </div> </section>
      <div className="ContentBaseContainer">
        <section className="big">

          <div className="bigboxes">
            <h2>Our Mission?</h2>
            <h3>At Our job portal ,our mision is simple to empower professionals by connecting them with the right opportunities and helping business find top talent with ease .We strive to create a seamless and effiecient recruitment ,experience,ensuring success for both job seekers and emplyoees.</h3>

          </div>
          <div className="bigboxes">
            <img className="Bigboximageee" src={require("../../../../assets/images/ourmissionimage.jpg")} />
          </div>
        </section>
        <div className="Section">
          <section className="Serve">
            <div className="ServingMain">
              <img className="servingImage1" src={require("../../../../assets/images/whomserveimage.jpg")} />
            </div>
            <div className="Serving">
              <h2>Whom We Serve?</h2>
              <h3>We cater to a wide range of users including:</h3>
              <h3>(1)job seekers.</h3>
              <h3>(2)Employers & Recruiters.</h3>
              <h3>(3)Freelance & Remote workers.
              </h3>
            </div>
          </section>
        </div>
      </div>
    </div>

  </div>
}
export default AboutPage;