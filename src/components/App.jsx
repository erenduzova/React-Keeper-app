import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NewNoteArea from "./NewNoteArea";

function App() {
  return (
    <div>
      <Header />
      <NewNoteArea />
        <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
