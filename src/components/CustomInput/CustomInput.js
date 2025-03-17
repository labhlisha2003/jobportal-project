import { useState } from "react";
import "./style.css";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function CustomInput({ type, placeholder, Icon, IconColor, isSecureEntry = false, inputValue, onChangeText, }) {
    const [showText, setShowText] = useState(false);
    return (
        <div className="customInputBaseContainer">
            <div className="customInputIConContainer">
                {Icon ? <Icon Color={IconColor} sixe={19} /> : null}
            </div>
            <div className="customInputInputContainer">
                <input value={inputValue} type={isSecureEntry ? (showText ? "text" : "Password") : type} placeholder={placeholder} onChange={onChangeText} /></div>

            {isSecureEntry && (
                <div className="customInputPasswordContainer"
                    onClick={() => {
                        setShowText(!showText);

                    }}
                >{showText ? <FaEye /> : <FaEyeSlash />}
        

                </div>
            
            )}

        </div>
        

    );
}
export default CustomInput;