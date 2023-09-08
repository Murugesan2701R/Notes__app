import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import NoteCreationPage from './components/NoteCreationPage';
import Cards from './components/Cards';
import Register from './components/Register';
import Login from './components/Login';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/create-note" element={<NoteCreationPage />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;
