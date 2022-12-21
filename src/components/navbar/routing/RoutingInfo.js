import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AboutMe from "../../../pages/about/aboutMe";
import Blog from "../../../pages/blog/blog";
import ProjectsPage from "../../../pages/projects/projectsPage";
import ContactMe from "../../../pages/contact/contactMe";
import Footer from "../../footer/footer";
import MyLogin from "../../../pages/login/myLogin";
import NewNavBar from "../NewNavBar";
import "../NewNavBarStyling.css";

const RoutingInfo = () => {

    return (
        <Router>
            <NewNavBar/>
            <section className="body">
                <Routes>
                    <Route path='/' element={<AboutMe/>}/>
                    <Route path='/blogs' element={<Blog/>}/>
                    <Route path='/projects' element={<ProjectsPage/>}/>
                    <Route path='/contact' element={<ContactMe/>}/>
                    <Route path='/login4me' element={<MyLogin/>}/>
                </Routes>
                <Footer/>
            </section>
        </Router>
    );
}

export default RoutingInfo;