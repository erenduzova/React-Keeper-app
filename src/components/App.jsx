import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import NewNoteArea from "./NewNoteArea";

function App() {
  return (
    <div>
      <Header />
      <NewNoteArea />
      {notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
