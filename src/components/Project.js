import React from "react";

function Project(props) {
  return (
    <div className="d-flex flex-row flex-wrap">
        {props.projects.map((project) => (
            <div className="projects">
            <div className="card col-lg-6 col-md-6 col-sm-12">
              <div className="card-image">
                <figure>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <img src={project.image} alt="" />
                  </a>
                </figure>
              </div>
            
                <div className="card-content">
                <h4 className="title" key={project.id}>
                      {project.title}
                    </h4>
                  {project.description}
                  <ul>
                    <li>Languages: {project.languages}</li>
                    <li>NPM Packages: {project.packages}</li>
                  </ul>
                  <div className="card">
                    <footer className="card-buttons">
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn btn-primary" role="button">
                        Repo
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary" role="button">
                        Live Site
                      </a>
                    </footer>
                </div>
              </div>
              </div>
            </div>
        ))}
      </div>
  );
}

export default Project;