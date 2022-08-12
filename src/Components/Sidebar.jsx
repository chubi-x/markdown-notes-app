import React from "react";
export default function Sidebar({
  createNote,
  notes,
  currentNote,
  setCurrrentNote,
}) {
  const noteElements = notes.map((note) => (
    <div
      className={`${currentNote === note.id ? "selected" : ""} note`}
      key={note.id}
      onClick={() => setCurrrentNote(note.id)}
    >
      <p> {note.body}</p>
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
