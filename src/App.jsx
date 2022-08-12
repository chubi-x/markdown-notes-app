import { useState, useEffect } from "react";
import Split from "react-split";
import "./App.css";
import Navbar from "./Components/Navbar";
import Editor from "./Components/Editor";
import Sidebar from "./Components/Sidebar";
import { nanoid } from "nanoid";
function App() {
  // STATE
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [currentNoteId, setCurrentNoteId] = useState(notes[0].id);

  // EFFECTS
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // create new note function
  function createNote() {
    const newNote = {
      id: nanoid(),
      body: "# Enter your markdown here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  }
  // update notes function
  // delete notes function
  return (
    <div className="app">
      <Navbar />
      <Split
        sizes={[30, 70]}
        direction="horizontal"
        className="split"
        gutterSize={7}
        cursor="ew-resize"
        dragInterval={1}
      >
        <Sidebar
          createNote={createNote}
          notes={notes}
          currentNote={currentNoteId}
          setCurrrentNote={setCurrentNoteId}
        />
        <Editor />
      </Split>
    </div>
  );
}

export default App;

