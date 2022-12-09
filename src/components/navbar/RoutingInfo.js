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

const RoutingInfo = (props) => {

    return (
        <div className="app">
            <div className={!props.initialized ? 'routing-info' : 'routing-info.active '}>
                <Router>
                    <Row>
                        <NewNavBar/>
                    </Row>
                    <Row className="align-items-center viewport-height">
                        <Routes>
                            <Route path='/' exact element={<HomePage/>}/>
                            <Route path='/about' element={<AboutMe/>}/>
                            <Route path='/blogs' element={<Blog/>}/>
                            <Route path='/projects' element={<ProjectsPage/>}/>
                            <Route path='/contact' element={<ContactMe/>}/>
                            <Route path='/login4me' element={<MyLogin/>}/>
                        </Routes>
                    </Row>
                    <Row className='app-footer active'>
                        <Footer/>
                    </Row>
                </Router>
            </div>
        </div>
    );
}

export default RoutingInfo;