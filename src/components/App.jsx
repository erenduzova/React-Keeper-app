import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NewNoteArea from "./NewNoteArea";

function App() {
  const [notes, setNotes] = useState([]);

  function handleAddButtonClick(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  return (
    <div>
      <Header />
      <NewNoteArea addButtonClick={handleAddButtonClick} />
      {notes.map((note,i) => {
        return <Note key={i} title={note.title} content={note.content} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
