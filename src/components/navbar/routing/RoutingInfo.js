import React, {useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AboutMe from "../../../pages/about/aboutMe";
import ProjectsPage from "../../../pages/projects/projectsPage";
import ContactMe from "../../../pages/contact/contactMe";
import Footer from "../../footer/footer";
import "../NewNavBarStyling.css";
import TestNavBar from "../testNavBar";

const RoutingInfo = () => {
    const [childVariable, setChildVariable] = useState(null);
    const [originalVariable, setOriginalVariable] = useState(null);

    function handleChildVariable(newValue) {
        console.log("childVariable: " + childVariable);
        console.log("newValue: " + newValue);
        setOriginalVariable(childVariable);
        setChildVariable(newValue);
    }

    return (
        <Router>
            <section className="nav-header">
                <TestNavBar handleChildVariable={handleChildVariable}/>
            </section>
            <section className="body">
                <Routes>
                    <Route
                        path="/"
                        element={<AboutMe prevComponent={childVariable} originalVariable={originalVariable}/>}
                        state={{component: "about"}}
                    />
                    <Route
                        path="/projects"
                        element={<ProjectsPage prevComponent={childVariable} originalVariable={originalVariable}/>}
                        state={{component: "projects"}}
                    />
                    <Route
                        path="/contact"
                        element={<ContactMe prevComponent={childVariable} originalVariable={originalVariable}/>}
                        state={{component: "contact"}}
                    />
                </Routes>
            </section>
            <Footer/>
        </Router>
    );
};

export default RoutingInfo;