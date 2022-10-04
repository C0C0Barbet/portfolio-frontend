import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Projects from './pages/projects';
import ContactMe from './pages/contact';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/projects' element={<Projects/>} />
                <Route path='/contact' element={<ContactMe/>} />
            </Routes>
        </Router>
    );
}

export default App;