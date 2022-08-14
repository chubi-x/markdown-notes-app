import React from "react";
export default function Sidebar({
  createNote,
  notes,
  currentNote,
  setCurrrentNote,
  deleteNote,
}) {
  const noteElements = notes.map((note) => (
    <div
      className={`${currentNote === note.id ? "selected" : ""} note`}
      key={note.id}
      onClick={() => setCurrrentNote(note.id)}
    >
      <p className="note-title"> {note.body}</p>
      <div
        className="trash-icon"
        onClick={(event) => deleteNote(event, note.id)}
      >
        <lottie-player
          src="https://assets8.lottiefiles.com/packages/lf20_efjoexgg.json"
          background="transparent"
          speed="1"
          style={{ width: "20px", height: "20px" }}
          loop
          hover
        ></lottie-player>
      </div>
    </div>
  ));
  return (
    <div className="sidebar">
      <div className="sidebar-header-container">
        <div className="sidebar-header">
          <h1>Notes</h1>
        </div>
        <div className="new-note">
          <button onClick={createNote}> + </button>
        </div>
      </div>
      {noteElements}
    </div>
  );
}
