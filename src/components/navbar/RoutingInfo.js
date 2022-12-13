import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "../../pages/home/homePage";
import AboutMe from "../../pages/about/aboutMe";
import Blog from "../../pages/blog/blog";
import ProjectsPage from "../../pages/projects/projectsPage";
import ContactMe from "../../pages/contact/contactMe";
import Footer from "../footer/footer";
import MyLogin from "../../pages/login/myLogin";
import {Row} from "react-bootstrap";
import NewNavBar from "./NewNavBar";
import "./NewNavBarStyling.css";

const RoutingInfo = () => {

    return (
        <div>
            <Router>
                <Row className="align-items-center viewport-height">
                    <NewNavBar/>
                    <Routes className='body'>
                        <Route path='/' exact element={<HomePage/>}/>
                        <Route path='/about' element={<AboutMe/>}/>
                        <Route path='/blogs' element={<Blog/>}/>
                        <Route path='/projects' element={<ProjectsPage/>}/>
                        <Route path='/contact' element={<ContactMe/>}/>
                        <Route path='/login4me' element={<MyLogin/>}/>
                    </Routes>
                </Row>
                <Row>
                    <Footer/>
                </Row>
            </Router>
        </div>
    );
}

export default RoutingInfo;