import { useState, useEffect } from "react";
import Split from "react-split";
import "./App.css";
import Navbar from "./Components/Navbar";
import Editor from "./Components/Editor";
import Sidebar from "./Components/Sidebar";
import { nanoid } from "nanoid";
function App() {
  // ######################################################
  // STATE
  // ######################################################

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showSidebar, setShowSidebar] = useState(false);
  // ######################################################
  /* EFFECTS */
  // ######################################################

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const changeWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [windowWidth]);

  // ########################
  // FUNCTIONS
  // ########################
  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }
  // create new note function
  function createNote() {
    const newNote = {
      id: nanoid(),
      body: "# Enter your markdown here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }
  // update notes function
  function updateNote(text) {
    setNotes((oldNotes) => {
      const updatedArray = [];
      oldNotes.forEach((note) => {
        if (note.id === currentNoteId) {
          note.body = text;
          updatedArray.unshift(note);
        } else {
          updatedArray.push(note);
        }
      });
      return updatedArray;
    });
  }
  // find current note function
  function findCurrentNote() {
    const currentNote = notes.find((note) => note.id === currentNoteId);
    const firstNote = notes[0];
    return currentNote || firstNote;
  }
  // delete notes function
  function deleteNote(event, noteId) {
    event.stopPropagation();
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === noteId && notes[i - 1]) {
        setCurrentNoteId(notes[i - 1].id);
        break;
      }
    }
    setNotes((oldNotes) => oldNotes.filter((note) => note.id != noteId));
  }
  // ######################################################
  // JSX ELEMENTS
  // ######################################################

  const sidebarTab = (
    <Sidebar
      createNote={createNote}
      notes={notes}
      currentNote={currentNoteId}
      setCurrrentNote={setCurrentNoteId}
      deleteNote={deleteNote}
      toggleSidebar={toggleSidebar}
    />
  );
  const editorTab = currentNoteId && notes.length > 0 && (
    <Editor updateNote={updateNote} currentNote={findCurrentNote()} />
  );
  const splitView = (
    <Split
      sizes={[30, 70]}
      direction={"horizontal"}
      className={"split"}
      gutterSize={7}
      cursor={"ew-resize"}
      dragInterval={1}
    >
      {sidebarTab}
      <Editor updateNote={updateNote} currentNote={findCurrentNote()} />
      {/* {editorTab} */}
    </Split>
  );
  const editorView = currentNoteId && notes.length > 0 && editorTab;
  const sidebarView = sidebarTab;
  const welcomeScreen = (
    <div className="welcome-screen-container">
      <div className="welcome-screen">
        <h1>You do not have any notes.</h1>
        <div className="welcome-screen-animation">
          <lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_kttlzfhh.json"
            background="transparent"
            speed="1"
            loop
            style={{ height: "100%", width: "100%" }}
            autoplay
          ></lottie-player>
        </div>
        <button onClick={createNote} className="new-note-button">
          Create One
        </button>
      </div>
    </div>
  );
  // #####################
  // RENDER
  // #####################
  return (
    <div className="app">
      <Navbar
        windowWidth={windowWidth}
        sidebar={showSidebar}
        toggleSidebar={toggleSidebar}
      />
      {notes.length <= 0
        ? welcomeScreen
        : notes.length > 0 && windowWidth > 600
        ? splitView
        : showSidebar
        ? sidebarView
        : editorView}
    </div>
  );
}

export default App;

