import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import WelcomePage from './pages/WelcomePage';
import CatsPage from './pages/CatsPage';
import VotesPage from './pages/VotesPage';
import FavoritesPage from './pages/FavoritesPage';

const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/cats" element={<CatsPage />} />
        <Route path="/votes" element={<VotesPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
