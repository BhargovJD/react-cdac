import About from "./components/About";
import Alerts from "./components/Alerts";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState("light");

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    // Remove the alert after 1.5 seconds
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (darkMode === "light") {
      // Only for navbar
      setDarkMode("dark");

      // For whole body
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";

      showAlert("Dark mode has been enabled", "success");
    } else {
      // Only for navbar
      setDarkMode("light");

      // For whole body
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";

      showAlert("Light mode has been enabled", "success");
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
      <Alerts alert={alert} />
      <TextForm
        title="Text"
        mode={darkMode}
        textareaPlaceholder="Enter text here..."
        showAlert={showAlert}
      />
      {/* <About /> */}
    </div>
  );
}

export default App;
