import React, {useState} from 'react'
import './App.css';
import Navbar from './components/navbar/navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/home/homePage';
import AboutMe from './pages/about/aboutMe';
import ContactMe from './pages/contact/contactMe';
import ProjectsPage from "./pages/projects/projectsPage";
import Blog from "./pages/blog/blog";
import Footer from "./components/footer/footer";


const App = () => {
    const [initialized, setInitialized] = useState(false);

    const handleEntry = () => {
        setInitialized(!initialized);
    };
    return (
        <div className="app">
            <Router>
                <div className={!initialized ? 'app-navbar' : 'app-navbar active'}>
                    <Navbar/>
                </div>
                <Routes>
                    <Route path='/' exact element={<HomePage/>}/>
                    <Route path='/about' element={<AboutMe/>}/>
                    <Route path='/blogs' element={<Blog/>}/>
                    <Route path='/projects' element={<ProjectsPage/>}/>
                    <Route path='/contact' element={<ContactMe/>}/>
                </Routes>
                <div className={!initialized ? 'app-entry active' : 'app-entry'}>
                    <button className={"button-main"} onClick={handleEntry}>
                        Enter Site
                    </button>
                </div>
                <div className={!initialized ? 'app-footer' : 'app-footer active'}>
                        <Footer/>
                </div>
            </Router>
        </div>
    );
}

export default App;