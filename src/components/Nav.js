import React from "react";

function Nav(props) {
  const tabs = ["About", "Portfolio", "Contact", "Resume"];
  return (
    <div className="tabs">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {tabs.map((tab) => (
          <li
            className={
              props.currentPage === tab ? "nav-item is-active" : "nav-item"
            }
            key={tab}
          >
            <a
              href={"#" + tab}
  
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? "nav-link active" : "nav-link"
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;