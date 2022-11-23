import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./navbar";
import HomePage from "../../pages/home/homePage";
import AboutMe from "../../pages/about/aboutMe";
import Blog from "../../pages/blog/blog";
import ProjectsPage from "../../pages/projects/projectsPage";
import ContactMe from "../../pages/contact/contactMe";
import Footer from "../footer/footer";

const RoutingInfo = (props) => {

    return (
        <div className="app">
            <div className={!props.initialized ? 'routing-info' : 'routing-info.active '}>
                <Router>
                    <div className='app-navbar active'>
                        <Navbar/>
                    </div>
                    <Routes>
                        <Route path='/' exact element={<HomePage/>}/>
                        <Route path='/about' element={<AboutMe/>}/>
                        <Route path='/blogs' element={<Blog/>}/>
                        <Route path='/projects' element={<ProjectsPage/>}/>
                        <Route path='/contact' element={<ContactMe/>}/>
                    </Routes>
                    <div className='app-footer active'>
                        <Footer/>
                    </div>
                </Router>
            </div>
        </div>
    );
}

export default RoutingInfo;