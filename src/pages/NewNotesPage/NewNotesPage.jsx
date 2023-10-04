import { useState, useEffect } from 'react';
import * as notesAPI from '../../utilities/notes-api';

export default function NewNotesPage() {
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    async function getNotes() {
      const notes = await notesAPI.getAll();
      setNewNote(notes);
    }
    getNotes();
  })
  // const handleAddNote = () => {
  //   if (newNote !== '') {
  //     addNote(newNote);
  //     setNewNote('');
  //   }
  // };

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
      <button>Add Note</button>
    </div>
  );
}
