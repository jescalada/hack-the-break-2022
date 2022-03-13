import { useRef } from "react";
import chrisName from "../assets/chris.gif";
import theGame from "../assets/the game text.png";
import chrispic from "../assets/chris.png"

export default function Start({ setUserName }) {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value && setUserName(inputRef.current.value);
    };
    return (
        <div className="start">
            <div className="topContainer">
                <img src={chrisName} className="chrisName" />
                <img src={theGame} className="theGame" />
            </div>
            <div className="inputValue">
                <img src={chrispic} className="chirsleft"/>
                <div>
                <input placeholder="enter your name" className="startInput" ref={inputRef} />
                <button className="startButton" onClick={handleClick}>
                    Start</button>
                </div>
            </div>
        </div>
    )
}
