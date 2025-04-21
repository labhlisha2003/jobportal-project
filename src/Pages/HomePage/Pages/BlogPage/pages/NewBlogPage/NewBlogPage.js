import React, { useState } from "react";
import "./styles.css";
import CustomInput from "../../../../../../../component/CustomInput/CustomInput";
import CustomButtom from "../../../../../../components/CustomButton/CustomButton";
import COLOR from "../../../../../../config/color";
import {set, ref, push } from "firebase/database";
import { database } from "../../../../../../firebase";
import CustomButton from "../../../../../../components/CustomButton/CustomButton";
export const NewBlogPage = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [buttonText, setButtonText] = useState("Save Blog");

    const handleSave = async () => {
        if (title == "" || content == "") {
            alert("Fill the fields first,") ;
        }else {
            setButtonText("Please Wait");
            await push(ref(database, `/blogs`),{
                title: title,
                content: content,
            });
            setButtonText("Save Blog");
            setTitle("");
            setContent("");
    }
};

return (
    <div className="newBlogPageBaseContainer">
        <div className="newBlogPageTitleContainer">
            <h1>Add new BLog</h1>
        </div>
        <div className="newBLogPageInputFormContainer">
            <CustomInput
            placeholder={"Enter Title"}
            inputValue={title}
            onChangeText={(e) => setTitle(e.target.value)}
            />
            <textarea
            placeholder="Enter content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <CustomButton
            backgroundColor={COLOR.basecolordark}
            title={buttonText}
            color={COLOR.whiteColor}
            onClick={handleSave}
            />
            </div>
             </div>
);
};