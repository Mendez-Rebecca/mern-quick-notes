import { useState } from 'react';

export default function NewNotesPage({ addNote, notes }) {
  const [newNote, setNewNote] = useState('');

  const handleAddNote = () => {
    if (newNote !== '') {
      addNote(newNote);
      setNewNote('');
    }
  };

  return (
    <div>
      <h1>New Notes</h1>
      <textarea
        rows="4"
        cols="50"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Enter your new note here"
      />
      <button onClick={handleAddNote}>Add Note</button>
      {notes.length === 0 ? (
        <p>No Notes Yet!</p>
      ) : (
        <ul>
          {notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
