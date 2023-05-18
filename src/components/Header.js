import React, { useState } from 'react';
import Nav from "./Nav";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

function Header() {
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;

      default:
        return <About />;
    }
  };

  return (
    <div>
      <header>
      <nav className="navbar navbar-expand-lg"> 
      <a href="/" className="navbar-brand">Emily Larkin</a>
      <div className="container-fluid">
      <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
      <Nav 
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      </div>
      </div>
      </nav>
      </header>
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}

export default Header;