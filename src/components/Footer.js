import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer className="footer">
      <hr />
        <ul className="footer-contact">
            <li><a href="mailto:emilylarkin11@hotmail.co.uk"><FontAwesomeIcon icon={faEnvelope} size="2xl" className="fa-icon"/></a></li>
            <li><a href="https://github.com/emlarko" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2xl" className="fa-icon"/></a></li>
            <li><a href="https://linkedin.com/in/emily-larkin-4595a8246" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon= {faLinkedin} size="2xl" className="fa-icon" /></a></li>
            <li><a href="https://www.instagram.com/emlarko/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size="2xl" className="fa-icon"/></a></li>
        </ul>
    </footer>
  );
}

export default Footer;