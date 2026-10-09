import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState("light");

  const toggleMode = () => {
    if (darkMode === "light") {
      // Only for navbar
      setDarkMode("dark");

      // For whole body
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
    } else {
      // Only for navbar
      setDarkMode("light");

      // For whole body
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <div className="App">
      <Navbar
        title="textUtils"
        aboutText="About"
        homeText="Home"
        mode={darkMode}
        toggleMode={toggleMode}
      />
      <TextForm
        title="Text"
        mode={darkMode}
        textareaPlaceholder="Enter text here..."
      />
      {/* <About /> */}
    </div>
  );
}

export default App;
