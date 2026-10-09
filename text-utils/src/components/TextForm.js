import { useState } from "react";

export default function TextForm({
  title = "Set title here",
  textareaPlaceholder = "Set textarea placeholder here",
}) {
  const [text, setText] = useState("");

  const handleUppercase = () => {
    const newText = text.toUpperCase();
    setText(newText);
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
            rows={4}
            placeholder={textareaPlaceholder}
            value={text}
            onChange={handleOnchange}
          />
        </div>
        <button className="btn btn-primary" onClick={handleUppercase}>
          Uppercase
        </button>
      </div>

      <div className="container mt-2">
        <h2>Your text summary</h2>
        <p>Characters: {text.length}</p>
      </div>
    </>
  );
}
