import { useState } from 'react';

export default function NewNoteForm({ addNotes }) {
    const [newNote, setNewNote] = useState({ text: '' });

    function handleSubmit(evt) {
        evt.preventDefault();
        addNotes(newNote);
        setNewNote({ text: '' });
    }

    function handleChange(evt) {
        setNewNote({ ...newNote, [evt.target.name]: [evt.target.value] });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="text"
                value={newNote.text}
                onChange={handleChange}
                required
            />
            <button type="submit">Add Note</button>
        </form>
    );
}
