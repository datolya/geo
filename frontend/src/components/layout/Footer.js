import React from 'react';

function Footer() {
  return (
    <>
      <style>{`
        footer {
          background: linear-gradient(135deg, #2d2420 0%, #3b2f2f 100%);
          padding: 40px 0;
          color: #ffffff;
        }

        footer p {
          margin-bottom: 20px;
          font-family: 'Proxima Nova', sans-serif;
          font-size: 0.95rem;
          color: #ffffff;
        }

        footer .social-links {
          display: flex;
          gap: 25px;
          justify-content: center;
          align-items: center;
        }

        footer .social-links a {
          color: #ffffff;
          transition: all 0.3s ease;
          font-size: 1.5rem;
        }

        footer .social-links a:hover {
          color: #d4a373;
          transform: translateY(-3px);
        }
      `}</style>

      <footer className="text-center">
        <div className="container">
          <p>© 2025 Datolya Consulting. All rights reserved.</p>
          <div className="social-links">
            <a href="https://github.com/datolya" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-lg"></i>
            </a>
            <a href="https://www.linkedin.com/in/sebestyen-gergely/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="https://www.upwork.com/freelancers/~01a5243280df09e2b4" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-upwork fa-lg"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;