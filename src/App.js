
import React from 'react';
import './styles/App.css';
import Navbar from './comps/NavbarComps';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Project from './pages/project';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
      </Routes>
    </Router>
  );
}
  
export default App;