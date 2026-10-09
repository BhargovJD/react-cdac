import { useState } from "react";

export default function TextForm({
  title = "Set title here",
  mode = "light",
  textareaPlaceholder = "Set textarea placeholder here",
}) {
  const [text, setText] = useState("");

  const handleUppercase = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowercase = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };

  const clearText = () => {
    setText("");
  };

  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container mt-4">
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            {title}
          </label>

          <textarea
            className="form-control"
            style={{
              backgroundColor: mode === "dark" ? "#042743" : "white",
              color: mode === "dark" ? "white" : "black",
            }}
            id="message"
            rows={4}
            // placeholder={textareaPlaceholder}
            value={text}
            onChange={handleOnchange}
          />
        </div>
        <button className="btn btn-primary m-1" onClick={handleUppercase}>
          Uppercase
        </button>
        <button className="btn btn-primary m-1" onClick={handleLowercase}>
          Lowercase
        </button>
        <button className="btn btn-primary m-1" onClick={clearText}>
          Clear Text
        </button>
      </div>

      <div className="container mt-2">
        <h2>Your text summary</h2>
        <p>Characters: {text.length}</p>
      </div>
    </>
  );
}
