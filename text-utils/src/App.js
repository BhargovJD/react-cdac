import About from "./components/About";
import Alerts from "./components/Alerts";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

      document.title = "TextUtils - Dark Mode";

      showAlert("Dark mode has been enabled", "success");
    } else {
      // Only for navbar
      setDarkMode("light");

      // For whole body
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";

      document.title = "TextUtils - Light Mode";

      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About"
          homeText="Home"
          mode={darkMode}
          toggleMode={toggleMode}
        />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                title="Text"
                mode={darkMode}
                textareaPlaceholder="Enter text here..."
                showAlert={showAlert}
              />
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Alerts alert={alert} />
      </Router>
    </div>
  );
}

export default App;
