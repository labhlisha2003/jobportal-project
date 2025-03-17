import { SiEthers } from "react-icons/si";
import ASSETS from "../../assets";
import CustomInput from "../../components/CustomInput/CustomInput";
import "./style.css";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";
import { useNavigate } from "react-router";
import { database } from "../../firebase";
import { set, ref } from "firebase/database";
import { FaKey} from "react-icons/fa";
import CustomButton from "../../components/CustomButton/CustomButton";


function RegisterPage() {
  const [FirstName, setFirstName] = useState("@gmail.com");
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
  const handleClick = () => {
    alert('Custom button clicked!');
};

  return (
    <div className="RegisterPageBaseContainer">
      <img src={require("../../assets/images/Registerimage.jpg")}></img>

      <div className="RegisterPageContentBaseContainer">
        <div className="RegisterPageContentTitleContainer">
          <h1>
            <i>
              <u>IT's TIME TO REGISTER</u>
            </i>
          </h1>
        </div>

        <div className="RegisterPageContentInputContainer">
          <CustomInput
            type={"text"}
            placeholder={" FirstName"}
            Icon={GoDotFill}
            inputValue={FirstName}
            onChangeText={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <CustomInput
            type={"text"}
            placeholder={" lastName"}
            Icon={GoDotFill}
            inputValue={lastName}
            onChangeText={(e) => {
              setlastName(e.target.value);
            }}
          />
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
           
          <CustomButton color={"white"} backgroundColor={"black"} title={"Register"} onClick={handleClick}/>

        </div>
      </div>
    </div>
  );
}
export default RegisterPage;
