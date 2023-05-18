import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from '@fortawesome/free-solid-svg-icons'

function Resume() {
  return (
    <div className="row">
      <h2 className="content">Resume</h2>
      <hr />
        <div className="col-lg-6 col-md-6 col-sm-12">
      <p className="content">
        resume info
      </p>
      <p className="content">
        resume info
      </p>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
      <a href="/EL-CV.pdf" className="btn btn-primary" role="button">
        <FontAwesomeIcon icon={faDownload} size="lg"/> Download My CV</a>
      </div>
    </div>
  );
}

export default Resume;