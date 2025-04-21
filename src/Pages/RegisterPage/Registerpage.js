import { createUserWithEmailAndPassword} from "firebase/auth";
import { SiEthers } from "react-icons/si";
import ASSETS from "../../assets";
import CustomInput from "../../components/CustomInput/CustomInput";
import "./style.css";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";
import { useNavigate } from "react-router";
import { auth,database } from "../../firebase";
import { set, ref } from "firebase/database";
import { FaKey} from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import COLOR from "../../config/color";
import CustomButton from "../../components/CustomButton/CustomButton";


function RegisterPage() {
  const [FirstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [qualification, setqualification] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setexperience] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [buttonText, setButtonText] = useState("Register");
  const navigate = useNavigate();

  const saveUserDetails = (data) => {
    set(ref(database, `users/${data.uid}`), data);
    navigate("/login");
  };
  const handleRegister = async () => {
    try {
      if (email == "" || password == "" || confirmpassword == "") {
        alert("Please fill the neccesary requirements");
      } else if (password!=confirmpassword){
        alert("password does not match");
    } else {
      setButtonText("Processing...");
      const response =  await createUserWithEmailAndPassword(
        auth,
        email,
        confirmpassword
      );
      setButtonText("Register");
      if(response.user.uid){
        const userData={
          uid:response.user.uid,
          email:response.user.email,
        
        };
        saveUserDetails(userData);
      }else{
        alert("failed to register");
        setEmail("");
        setpassword("");
        setconfirmpassword("");
      }
    }
    }catch(err){
    setButtonText("Register");
    setEmail("");
    setpassword("");
    setconfirmpassword("");
    alert(err);
  }
};

  return (
    <div className="RegisterPageBaseContainer">
      <img src={require("../../assets/images/registerrrimage.jpg")}></img>

      <div className="RegisterPageContentBaseContainer">
        <div className="RegisterPageContentTitleContainer">
          <h1>
            <i>
             < TfiWrite size={36} color={COLOR.blackColor} />
              <u>IT's TIME TO REGISTER</u>
            </i>
          </h1>
        </div>

        <div className="RegisterPageContentInputContainer">
          <CustomInput
            type={"text"}
            placeholder={" FullName"}
            Icon={GoDotFill}
            inputValue={FirstName}
            onChangeText={(e) => {
              setFirstName(e.target.value);
            }}
          />
          {/* <CustomInput
            type={"text"}
            placeholder={" lastName"}
            Icon={GoDotFill}
            inputValue={lastName}
            onChangeText={(e) => {
              setlastName(e.target.value);
            }}
          /> */}
          <CustomInput
            type={"text"}
            placeholder={"qualification"}
            Icon={GoDotFill}
            inputValue={qualification}
            onChangeText={(e) => {
              setqualification(e.target.value);
            }}
          />
          <CustomInput
            type={"email"}
            placeholder={"Email"}
            Icon={GoDotFill}
            inputValue={email}
            onChangeText={(e) => {
              setEmail(e.target.value);
            }}
          />
          <CustomInput
            type={"text"}
            placeholder={"experience"}
            Icon={GoDotFill}
            inputValue={experience}
            onChangeText={(e) => {
              setexperience(e.target.value);
            }}
          />
          <CustomInput
            type={"text"}
            placeholder={"password"}
            Icon={GoDotFill}
            inputValue={password}
            // Icon={FaKey} 
            isSecureEntry={true}
            onChangeText={(e) => {
              setpassword(e.target.value);
            }}
          />
          <CustomInput
            type={"text"}
            placeholder={"confirm password"}
            Icon={GoDotFill}
            inputValue={confirmpassword}
            // Icon={FaKey} 
            isSecureEntry={true}
            onChangeText={(e) => {
              setconfirmpassword(e.target.value);
            }}
          />
        </div>

        <div className="RegisterPagecontentbuttonContainer">
           
          <CustomButton color={"white"} backgroundColor={"black"} title={"Register"} onClick={handleRegister}/>

        </div>
      </div>
    </div>
  );
}
export default RegisterPage;
