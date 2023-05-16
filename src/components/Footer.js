import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
      <hr />
        <ul className="contact">
            <li><a href="mailto:emilylarkin11@hotmail.co.uk">Email</a></li>
            <li><a href="https://github.com/emlarko">GitHub</a></li>
            { <li><a href="https://linkedin.com/in/emily-larkin-4595a8246">
                {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" style={{color: "#a99985",}} /> */}
                LinkedIn</a></li> }
            <li><a href="https://www.instagram.com/emlarko/">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;