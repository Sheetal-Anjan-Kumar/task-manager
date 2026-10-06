import React from 'react';

function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <div className="brand">
          <span className="brand-mark">✓</span>
          <span className="brand-name">TaskFlow</span>
        </div>
        <nav className="site-nav">
          <span className="nav-item active">Dashboard</span>
        </nav>
      </div>
    </header>
  );
}
export default Header;