import React, { useState } from "react";

function NewNoteArea(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

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
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleNewNoteChange}
          value={newNote.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleNewNoteChange}
          value={newNote.content}
        />
        <button onClick={handleAddClick}>Add</button>
      </form>
    </div>
  );
}

export default NewNoteArea;
