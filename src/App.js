import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/home/homePage';
import AboutMe from './pages/about/aboutMe';
import ContactMe from './pages/contact/contactMe';
import ProjectsPage from "./pages/projects/projectsPage";

const App = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<HomePage/>}/>
                <Route path='/about' element={<AboutMe/>}/>
                <Route path='/projects' element={<ProjectsPage/>}/>
                <Route path='/contact' element={<ContactMe/>}/>
            </Routes>
        </Router>
    );
}

export default App;