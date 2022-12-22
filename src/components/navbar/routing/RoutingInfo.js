import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AboutMe from "../../../pages/about/aboutMe";
import ProjectsPage from "../../../pages/projects/projectsPage";
import ContactMe from "../../../pages/contact/contactMe";
import Footer from "../../footer/footer";
import NewNavBar from "../NewNavBar";
import "../NewNavBarStyling.css";

const RoutingInfo = () => {

    return (
        <Router>
            <NewNavBar/>
            <section className="body">
                <Routes>
                    <Route path='/' element={<AboutMe/>}/>
                    <Route path='/projects' element={<ProjectsPage/>}/>
                    <Route path='/contact' element={<ContactMe/>}/>
                </Routes>
            </section>
            <Footer/>
        </Router>
    );
}

export default RoutingInfo;