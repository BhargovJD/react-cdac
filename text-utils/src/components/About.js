import { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setBtnText] = useState("Enable dark mode");

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable light mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable dark mode");
    }
  };

  return (
    <>
      <div className="container py-5" style={myStyle}>
        About us
        <ul className="list-group">
          <li className="list-group-item" style={myStyle}>
            An item
          </li>
          <li className="list-group-item" style={myStyle}>
            A second item
          </li>
          <li className="list-group-item" style={myStyle}>
            A third item
          </li>
          <li className="list-group-item" style={myStyle}>
            A fourth item
          </li>
          <li className="list-group-item" style={myStyle}>
            And a fifth one
          </li>
        </ul>
        <div>
          <button className="btn btn-primary mt-3" onClick={toggleStyle}>
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
}
