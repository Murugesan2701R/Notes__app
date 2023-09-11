import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import NoteCreationPage from './components/NoteCreationPage';
import Cards from './components/Cards';
import Register from './components/Register';
import Login from './components/Login';
import Search from './components/SearchPage';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/create-note" element={<NoteCreationPage />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />/
        <Route path="/search" element={<Search />} />
        <Route path="/edit-note/:id" element={<NoteCreationPage />} />
        <Route path="/note-creation/:id" element={<NoteCreationPage />} />

      </Routes>
    </Router>
  );
}

export default App;
