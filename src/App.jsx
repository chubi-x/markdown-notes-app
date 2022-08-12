import reactDOM from "react-dom/client";
import Split from "react-split";
import "./App.css";
import Navbar from "./Components/Navbar";
import Editor from "./Components/Editor";
import Sidebar from "./Components/Sidebar";
function App() {
  return (
    <>
      <Navbar />
      <Split
        sizes={[30, 70]}
        direction="horizontal"
        className="split"
        gutterSize={7}
        cursor="ew-resize"
      >
        <Sidebar />
        <Editor />
      </Split>
    </>
  );
}

export default App;

