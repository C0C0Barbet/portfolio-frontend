import React from 'react';
import './footerStyling.css';
import GithubImage from '../../filesToUse/images/github.png';
import LinkedinImage from '../../filesToUse/images/linkedin.png';
import ResumeImage from '../../filesToUse/images/resume.png';
import ActualResume from '../../filesToUse/documents/Colin Burgess Resume.pdf';

const Footer = () => {

    return (
        <nav className="footer-container">
            <ul className="footer">
                <li className="footer-elements">
                    <a href="https://github.com/C0C0Barbet" target="_blank" rel='noopener noreferrer'>
                        <img src={GithubImage} alt="Link to my github" className="image-icon"/>
                    </a>
                </li>
                <li className="footer-elements">
                    <a href="https://www.linkedin.com/in/c0c0b/" target="_blank" rel='noopener noreferrer'>
                        <img src={LinkedinImage} alt="Link to my linkedin" className="image-icon"/>
                    </a>
                </li>
                <li className="footer-elements">
                    <a href={ActualResume} target='_blank' rel='noopener noreferrer'>
                        <img src={ResumeImage} alt="Link to my resume" className="image-icon"/>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Footer;