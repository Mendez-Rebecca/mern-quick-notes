import NewNoteForm from '../../components/NewNoteForm/NewNoteForm';

export default function NewNotesPage({ addNotes }) {
  return (
    <div>
      <h1>New Notes</h1>
      <NewNoteForm addNotes={addNotes} />
    </div>
  );
}
