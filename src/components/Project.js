import React from "react";

function Project(props) {
  return (
    <div className="d-flex flex-row flex-wrap">
        {props.projects.map((project) => (
            <div className="projects">
            <div className="card col-lg-6 col-md-6 col-sm-12">
              <div className="card-image">
                <figure>
                  <a href={project.live}>
                    <img src={process.env.PUBLIC_URL + project.image} alt="" />
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
                      <a href={project.repo} className="btn btn-primary" role="button">
                        Repo
                      </a>
                      <a href={project.live} className="btn btn-primary" role="button">
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