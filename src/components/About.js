import React from "react";

function About() {
  return (
    <div className="row">
      <section className='content'>
        <h4>Hello there, I'm Emily</h4>
      </section>
      <div className="content"><img className="portrait" src='./react-portfolio/images/portrait.JPG' alt=""/></div>
      <p className="content">
        <i>Welcome to my Portfolio, created with React.</i>
      </p>
      <div className="bio-content"> 
      <p>
        While studying art at Central Saint Martins, I became interested <br />
        in Web Development after building a website for my online portfolio. <br />
        I started to take my learning further by partaking in a Python course with Code First Girls. <br />
        While working at Word360, I helped with IT Tickets using MongoDB,<br /> 
        which led to more of an interest in Backend Development. <br />
        <br />
        You can check out my projects on <a href="https://github.com/emlarko">GitHub</a>
      </p>
      </div>
      </div>
  );
}

export default About;