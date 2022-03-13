import { useRef } from "react"

export default function Start({ setUserName }) {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value && setUserName(inputRef.current.value);
    };
    return (
        <div className="start">
            <div className="logo">
                    ...
            </div>
            <div className="inputValue">
                <input placeholder="enter your name" className="startInput" ref={inputRef} />
                <button className="startButton" onClick={handleClick}>
                    Start</button>
            </div>
        </div>
    )
}
