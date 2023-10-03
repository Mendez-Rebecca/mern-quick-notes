import { useState } from 'react';

export default function NewNotesPage() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote !== '') {
      const updateNotes = [...notes, newNote];

      setNotes(updateNotes);
      setNewNote('');
    }
  }

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
      <button onClick={addNote}>Add Note</button>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}
