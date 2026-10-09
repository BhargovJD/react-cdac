import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <div className="App">
      <Navbar title="textUtils" aboutText="About" homeText="Home" />
      <TextForm title="Text" textareaPlaceholder="Enter text here..." />
      <About />
    </div>
  );
}

export default App;
