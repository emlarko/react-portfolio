import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
      <hr />
        <ul className="footer-contact">
            <li><a href="mailto:emilylarkin11@hotmail.co.uk"><FontAwesomeIcon icon={faEnvelope} size="2xl" className="fa-icon"style={{color: "#a99985",}}/></a></li>
            <li><a href="https://github.com/emlarko"><FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#a99985",}} /></a></li>
            <li><a href="https://linkedin.com/in/emily-larkin-4595a8246"><FontAwesomeIcon icon= {faLinkedin} size="2xl" style={{color: "#a99985",}} /></a></li>
            <li><a href="https://www.instagram.com/emlarko/"><FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#a99985",}}/></a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;