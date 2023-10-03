import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewNotesPage from '../NewNotesPage/NewNotesPage';
import PastNotesPage from '../PastNotesPage/PastNotesPage';
import NavBar from '../../components/NavBar/NavBar';
import LoginPage from '../../components/LoginPage/LoginPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    if (newNote !== '') {
      const updatedNotes = [...notes, newNote];
      setNotes(updatedNotes);
    }
  };

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/notes/new" element={<NewNotesPage addNote={addNote} notes={notes} />} />
            <Route path="/notes" element={<PastNotesPage notes={notes} />} />
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
