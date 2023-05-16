import React from "react";

function Project(props) {
  return (
    <div>
        {props.projects.map((project) => (
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="projects">
            <div className="card col-md-6">
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
                    <footer>
                      <button type="button" className="btn" href={project.repo}>
                        See the Repo
                      </button>
                      <button type="button" className="btn" href={project.live}>
                        See the Live Site
                      </button>
                    </footer>
                </div>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
}

export default Project;