import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Artist Portfolio",
    languages: "JS, CSS, Handlebars",
    packages: "bcrypt, cloudinary, connect-session-sequelize, dotenv, express, express-handlebars, express-session, mysql2, sequelize",
    image: "/images/artist-portfolio.herokuapp.com_.png",
    description: "The Gallery application allows Users to upload images of their Artwork to different Galleries after signing up for an account. The User is also able to view other Users’ work and add comments.",
    repo: "https://github.com/emlarko/artist-portfolio",
    live: "https://artist-portfolio.herokuapp.com/",
  },
  {
    id: 1,
    title: "Marvel Character Finder",
    languages: "HTML, JS, CSS",
    packages: "None",
    image: "/images/marvel_screenshot1.png",
    description: "The User is able to search for a Marvel Characters' movies and Comic Books",
    repo: "https://github.com/emlarko/marvel-character-finder",
    live: "https://emlarko.github.io/marvel-character-finder/",
   },
   {
    id: 2,
    title: "Tech Blog",
    languages: "JS, CSS, Handlebars",
    packages: "bcrypt, cloudinary, connect-session-sequelize, dotenv, express, express-handlebars, express-session, mysql2, sequelize, inquirer",
    image: "/images/tech_blog.png",
    description: "After signing into their account, the User is able to view blog posts and comments, including the date they were posted and by which user.",
    repo: "https://github.com/emlarko/artist-portfolio",
    live: "https://artist-portfolio.herokuapp.com/",
  },
];

function Portfolio() {
  return (
    <div>
      <h3 className="portfolio">Portfolio</h3>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;