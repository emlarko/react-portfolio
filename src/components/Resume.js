import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from '@fortawesome/free-solid-svg-icons'

function Resume() {
  return (
    <div className="row">
      <h2 className="content">Resume</h2>
      <hr />
        <div className="col-lg-6 col-md-6 col-sm-12">
      <section className="resume-content">
        <h5>Frontend Skills</h5>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Bootstrap</li>
          <li>Handlebars</li>
          <li>React</li>
        </ul>
        </section>
        <section className="resume-content">
        <h5>Backend Skills</h5>
        <ul className> 
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL - Sequelize</li>
          <li>Mongoose - MongoDB</li>
        </ul>
        </section>
      </div>
      <div className="content-button col-lg-6 col-md-6 col-sm-12">
      <a href="/EL-CV.pdf" className="btn btn-primary" role="button">
        <FontAwesomeIcon icon={faDownload} size="lg"/>Download My CV</a>
      </div>
    </div>
  );
}

export default Resume;