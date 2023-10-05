import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import * as notesAPI from '../../utilities/notes-api';
import AuthPage from '../AuthPage/AuthPage';
import NewNotesPage from '../NewNotesPage/NewNotesPage';
import PastNotesPage from '../PastNotesPage/PastNotesPage';
import NavBar from '../../components/NavBar/NavBar';
import LoginPage from '../../components/LoginPage/LoginPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);

  async function addNotes(note) {
    const newNote = await notesAPI.create(note);
    setNotes([...notes, newNote]);
  }

  useEffect(function () {
    async function getNotes() {
      const allNotes = await notesAPI.index();
      setNotes(allNotes);
    }
    getNotes()
  }, [])

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/notes/new" element={<NewNotesPage addNotes={addNotes} />} />
            <Route path="/notes" element={<PastNotesPage />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route path="/*" element={<AuthPage setUser={setUser} />} />
        </Routes>
      )}
    </main>
  );
}
