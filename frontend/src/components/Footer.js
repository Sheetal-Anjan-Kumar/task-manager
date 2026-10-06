import React from 'react';

function Footer() {
  return (
    <footer className="site-footer">
      <p>Built with the MERN stack — MongoDB, Express, React, Node.js</p>
      <p className="footer-sub">© {new Date().getFullYear()} TaskFlow. Personal project.</p>
    </footer>
  );
}
export default Footer;