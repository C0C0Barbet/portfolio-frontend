import React from 'react';
import {Link} from "react-router-dom";
import './footerStyling.css';
import GithubImage from '../../filesToUse/images/github.png';
import LinkedinImage from '../../filesToUse/images/linkedin.png';
import ResumeImage from '../../filesToUse/images/resume.png';

const Footer = () => {

    return (
        <nav className="footer-container">
            <ul className="footer">
                <li className="footer-elements">
                    <a href="https://github.com/C0C0Barbet">
                        <img src={GithubImage} alt="Link to my github" className="image-icon"/>
                    </a>
                </li>
                <li className="footer-elements">
                    <a href="https://www.linkedin.com/in/c0c0b/">
                        <img src={LinkedinImage} alt="Link to my linkedin" className="image-icon"/>
                    </a>
                </li>
                <li className="footer-elements">
                    <Link to="https://github.com/Joeyryanbridges">
                        <img src={ResumeImage} alt="Link to download my resume" className="image-icon"/>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Footer;