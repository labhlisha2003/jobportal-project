import"./style.css";
function CustomButton({backgroundColor, color, title, onclick}) {
    return (
        <div
            className="customButtonBaseContainer"
            style={{backgroundColor,color}}
            onclick={onclick}
            >
                {title}
            </div>
    );
}

export default CustomButton;