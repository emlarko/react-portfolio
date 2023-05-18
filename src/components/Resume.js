import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from '@fortawesome/free-solid-svg-icons'

function Resume() {
  return (
    <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
      <p className="content">
        resume info
      </p>
      <p className="content">
        resume info
      </p>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <button type="submit"  className="btn btn-primary" ><FontAwesomeIcon icon={faDownload} size="lg"/> Download My CV</button>
      </div>
    </div>
  );
}

export default Resume;