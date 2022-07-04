import React, { useState } from "react";

import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function NewNoteArea(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });
  const [zoomIn, setZoom] = useState(false);

  function handleZoom() {
    setZoom(true);
  }

  function handleNewNoteChange(event) {
    const { name, value } = event.target;

    setNewNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  function handleAddClick(event) {
    props.addButtonClick(newNote);
    setNewNote({
      title: "",
      content: "",
    });
    setZoom(false);
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {zoomIn && (
          <input
            name="title"
            placeholder="Title"
            onChange={handleNewNoteChange}
            value={newNote.title}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={zoomIn ? 3 : 1}
          onChange={handleNewNoteChange}
          value={newNote.content}
          onClick={handleZoom}
        />
        <Zoom in={zoomIn}>
          <Fab onClick={handleAddClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default NewNoteArea;
