import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
      <div className="container">
        <a className="navbar-brand fw-bold d-flex align-items-center" href="#home">
          <img src="/images/datolya-logo.png" alt="Datolya Logo" height="30" className="me-2" />
          <div className="d-flex flex-column">
            <span style={{
              fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              fontWeight: 600,
              fontSize: '1.5rem',
              letterSpacing: '0.5px'
            }}>datolya - architects</span>
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-uppercase">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">Cloud Data</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#expertise">AI Search</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Collaborate</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;