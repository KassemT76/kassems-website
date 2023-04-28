
import React from 'react';
import './styles/App.css';
import Navbar from './comps/NavbarComps';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages';
import About from './pages/about';
import Project from './pages/project';

import Card1 from './pages/projpapers/card1';
import Card2 from './pages/projpapers/card2';
import Card3 from './pages/projpapers/card3';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/project' element={<Project />} />

        <Route path='/project/card1' element={<Card1 />} />
        <Route path='/project/card2' element={<Card2 />} />
        <Route path='/project/card3' element={<Card3 />} />

      </Routes>
    </Router>
  );
}
  
export default App;