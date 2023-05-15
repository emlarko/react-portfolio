import React, { useState } from 'react';
import Nav from "./Nav";
import About from "./About";
// import Contact from "./Contact";
// import Portfolio from "./Portfolio";
// import Resume from "./Resume";

function Header() {
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      // case "Portfolio":
      //   return <Portfolio />;
      // case "Contact":
      //   return <Contact />;
      // case "Resume":
      //   return <Resume />;

      default:
        return <About />;
    }
  };

  return (
    <div>
      <header>
      <h1 className="content">Emily Larkin</h1>
      <nav className="navbar"> 
      <Nav 
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      </nav>
      </header>
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}

export default Header;