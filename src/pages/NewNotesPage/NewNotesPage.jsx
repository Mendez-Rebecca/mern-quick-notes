import { useState, useEffect } from 'react';
import * as notesAPI from '../../utilities/notes-api';

export default function NewNotesPage() {
  const [newNote, setNewNote] = useState('');
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function getNotes() {
      try {
        const notes = await notesAPI.getAll();
        setNotes(notes);
      } catch (error) {
        console.error('Error fetching notes:', error);
        // Handle the error here, e.g., display an error message to the user
      }
    }

    getNotes();
  }, []);

  const addNote = async () => {
    if (newNote.trim() === '') return;

    try {
      const addedNote = await notesAPI.createNote({ content: newNote });
      setNotes([...notes, addedNote]);
      setNewNote('');
    } catch (error) {
      console.error('Error creating a new note:', error);
      // Handle the error here, e.g., display an error message to the user
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
      <button onClick={addNote}>Add Note</button>
      <div>
        <h2>Notes:</h2>
        <ul>
          {notes.map((note) => (
            <li key={note._id}>{note.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
