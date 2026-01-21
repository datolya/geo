import React from 'react';

function About() {
  const team = [
    {
      name: "Sebestyén Gergely",
      role: "Co-Founder (Engineering)",
      linkedin: "https://www.linkedin.com/in/sebestyen-gergely/",
      github: "https://github.com/datolya",
      upwork: "https://www.upwork.com/freelancers/~01a5243280df09e2b4"
    },
    {
      name: "Dániel Dajka",
      role: "Co-Founder (Operations)",
      linkedin: "https://www.linkedin.com/in/daniel-dajka/",
      github: "https://github.com/datolya",
      upwork: "https://www.upwork.com/freelancers/~01a5243280df09e2b4"
    }
  ];

  return (
    <>
      <style>{`
        /* About Section - Premium Tech Aesthetic */
        .about-section {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #f9f7f4 0%, #e8e4de 40%, #d4cfc7 100%);
          min-height: 100vh;
          padding: 80px 0;
        }

        /* Noise texture overlay for richness */
        .about-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image:
            url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.2;
          z-index: 1;
          pointer-events: none;
          animation: noise-shift 8s infinite alternate;
        }

        @keyframes noise-shift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-2%, -2%); }
        }

        .about-pipeline-network {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          pointer-events: none;
          filter: blur(1px);
        }

        /* Extremely subtle lines with blur */
        .about-pipeline-line {
          position: absolute;
          filter: blur(2px);
        }

        .about-pipeline-line.horizontal {
          height: 2px;
          background: linear-gradient(90deg,
            rgba(160, 130, 100, 0.05) 0%,
            rgba(160, 130, 100, 0.12) 20%,
            rgba(178, 140, 104, 0.18) 40%,
            rgba(178, 140, 104, 0.2) 50%,
            rgba(178, 140, 104, 0.18) 60%,
            rgba(160, 130, 100, 0.12) 80%,
            rgba(160, 130, 100, 0.05) 100%
          );
          background-size: 200% 100%;
          animation: about-flow-horizontal 12s linear infinite;
        }

        .about-pipeline-line.vertical {
          width: 2px;
          background: linear-gradient(180deg,
            rgba(160, 130, 100, 0.05) 0%,
            rgba(160, 130, 100, 0.12) 20%,
            rgba(178, 140, 104, 0.18) 40%,
            rgba(178, 140, 104, 0.2) 50%,
            rgba(178, 140, 104, 0.18) 60%,
            rgba(160, 130, 100, 0.12) 80%,
            rgba(160, 130, 100, 0.05) 100%
          );
          background-size: 100% 200%;
          animation: about-flow-vertical 12s linear infinite;
        }

        .about-pipeline-line.diagonal {
          height: 2px;
          background: linear-gradient(90deg,
            rgba(160, 130, 100, 0.05) 0%,
            rgba(160, 130, 100, 0.12) 20%,
            rgba(178, 140, 104, 0.18) 40%,
            rgba(178, 140, 104, 0.2) 50%,
            rgba(178, 140, 104, 0.18) 60%,
            rgba(160, 130, 100, 0.12) 80%,
            rgba(160, 130, 100, 0.05) 100%
          );
          background-size: 200% 100%;
          animation: about-flow-horizontal 12s linear infinite;
        }

        @keyframes about-flow-horizontal {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        @keyframes about-flow-vertical {
          0% { background-position: 50% 0%; }
          100% { background-position: 50% 200%; }
        }

        /* Ambient light rays - subtle glassmorphism effect */
        .light-ray {
          position: absolute;
          width: 200px;
          height: 200px;
          background: radial-gradient(ellipse at center, rgba(212, 163, 115, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(40px);
          animation: light-drift 20s ease-in-out infinite;
          pointer-events: none;
          z-index: 1;
        }

        .light-ray:nth-child(1) {
          top: 10%;
          left: 20%;
          animation-delay: 0s;
        }

        .light-ray:nth-child(2) {
          top: 60%;
          right: 15%;
          animation-delay: 7s;
          animation-duration: 25s;
        }

        .light-ray:nth-child(3) {
          bottom: 15%;
          left: 40%;
          animation-delay: 14s;
          animation-duration: 30s;
        }

        @keyframes light-drift {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -20px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 30px) scale(0.9);
          }
        }

        /* About CTA Button */
        .about-cta-button {
          display: inline-block;
          padding: 16px 48px;
          background: linear-gradient(135deg, #a67c5c 0%, #d4a373 100%);
          color: #fefbf6;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-decoration: none;
          border-radius: 8px;
          border: 1px solid rgba(212, 163, 115, 0.4);
          box-shadow: 0 4px 15px rgba(212, 163, 115, 0.25),
                      inset 0 0 6px rgba(255, 255, 255, 0.15);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .about-cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.25),
            transparent
          );
          transition: left 0.6s ease;
        }

        .about-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(212, 163, 115, 0.4),
                      inset 0 0 8px rgba(255, 255, 255, 0.25);
          border-color: rgba(212, 163, 115, 0.6);
          color: #fffaf3;
          text-decoration: none;
        }

        .about-cta-button:hover::before {
          left: 100%;
        }

        .about-cta-button:active {
          transform: translateY(0);
          box-shadow: 0 2px 10px rgba(212, 163, 115, 0.3);
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .about-cta-button {
          opacity: 0;
          animation: fade-in-up 1.2s ease 0.8s forwards;
        }

        /* Content styling */
        .about-content-container {
          position: relative;
          z-index: 2;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }

        .team-container {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(20px) saturate(180%);
          padding: 40px;
          border-radius: 24px;
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(160, 130, 100, 0.15);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .team-container:hover {
          transform: translateY(-4px);
          box-shadow:
            0 12px 48px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.5);
        }

        .team-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .team-member {
          text-align: center;
        }

        .team-member h4 {
          color: #3b2f2f;
          font-weight: 700;
          margin-bottom: 10px;
          font-size: 1.1rem;
        }

        .team-member p {
          color: #666;
          margin-bottom: 20px;
          font-size: 0.85rem;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .social-icon-link {
          color: #3b2f2f;
          font-size: 1.3rem;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .social-icon-link:hover {
          color: #d4a373;
          transform: translateY(-3px) scale(1.1);
        }

        .company-intro {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(20px) saturate(180%);
          padding: 40px;
          border-radius: 24px;
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(160, 130, 100, 0.15);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .company-intro:hover {
          transform: translateY(-4px);
          box-shadow:
            0 12px 48px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.5);
        }

        .company-intro h3 {
          color: #3b2f2f;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .company-intro .lead {
          font-size: 1.15rem;
          color: #3b2f2f;
          margin-bottom: 20px;
        }

        .company-intro p {
          color: #555;
          line-height: 1.8;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
          }

          .team-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .about-content-container {
            padding: 0 15px;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .team-container,
          .company-intro {
            padding: 25px 20px;
            width: 100%;
            box-sizing: border-box;
          }

          .team-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .about-cta-button {
            padding: 14px 28px;
            font-size: 0.9rem;
            white-space: nowrap;
          }
        }
      `}</style>

      <section id="about" className="about about-section">
        {/* Ambient light rays for depth */}
        <div className="light-ray"></div>
        <div className="light-ray"></div>
        <div className="light-ray"></div>

        <div className="about-pipeline-network">
          {/* Subtle blurred lines - NO NODES, NO PARTICLES */}
          <div className="about-pipeline-line horizontal" style={{left: '5%', right: '5%', top: '15%'}}></div>
          <div className="about-pipeline-line horizontal" style={{left: '5%', right: '5%', top: '50%', animationDelay: '4s'}}></div>
          <div className="about-pipeline-line horizontal" style={{left: '5%', right: '5%', bottom: '15%', animationDelay: '8s'}}></div>

          <div className="about-pipeline-line vertical" style={{left: '5%', top: '15%', bottom: '15%'}}></div>
          <div className="about-pipeline-line vertical" style={{left: '25%', top: '10%', height: '25%', animationDelay: '2s'}}></div>
          <div className="about-pipeline-line vertical" style={{left: '25%', bottom: '10%', height: '25%', animationDelay: '6s'}}></div>
          <div className="about-pipeline-line vertical" style={{right: '25%', top: '10%', height: '25%', animationDelay: '10s'}}></div>
          <div className="about-pipeline-line vertical" style={{right: '25%', bottom: '10%', height: '25%', animationDelay: '3s'}}></div>
          <div className="about-pipeline-line vertical" style={{right: '5%', top: '15%', bottom: '15%', animationDelay: '7s'}}></div>

          {/* Diagonal connections */}
          <div className="about-pipeline-line diagonal" style={{left: '5%', top: '15%', width: '25%', transform: 'rotate(-15deg)', transformOrigin: 'left top', animationDelay: '1s'}}></div>
          <div className="about-pipeline-line diagonal" style={{left: '5%', bottom: '15%', width: '25%', transform: 'rotate(15deg)', transformOrigin: 'left bottom', animationDelay: '5s'}}></div>
          <div className="about-pipeline-line diagonal" style={{right: '5%', top: '15%', width: '25%', transform: 'rotate(15deg)', transformOrigin: 'right top', animationDelay: '9s'}}></div>
          <div className="about-pipeline-line diagonal" style={{right: '5%', bottom: '15%', width: '25%', transform: 'rotate(-15deg)', transformOrigin: 'right bottom', animationDelay: '2.5s'}}></div>
        </div>

        <div className="container about-content-container">
          <h2 className="text-center mb-5">Who We Are</h2>

          <div className="about-grid">
            {/* Left Side - Team Profiles */}
            <div className="team-container">
              <div className="team-grid">
                {team.map((member, index) => (
                  <div key={index} className="team-member">
                    <h4>{member.name}</h4>
                    <p>{member.role}</p>
                    <div className="social-links">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-link">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href={member.github} target="_blank" rel="noopener noreferrer" className="social-icon-link">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href={member.upwork} target="_blank" rel="noopener noreferrer" className="social-icon-link">
                        <i className="fas fa-briefcase"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Company Intro */}
            <div className="company-intro">
              <h3>You Are How You <i>Appear</i></h3>
              <p className="lead">
                A boutique AI search consultancy specialized in GEO, semantic rewrites and content optimization built for LLMs. We upscale visibility in ChatGPT, Gemini (Google) and other AI surfaces.
              </p>
              <p>
                <b>We turn narrative chaos into revenue from LLMs.</b>
                <br />
                <br />In the AI era, clicks don't matter - visibility does. When users ask AI, your brand needs to be seen, cited, and recommended. Our solution is battle tested at enterprise giants such as WeTransfer, Evernote and Bending Spoons. We offer what we've mastered, ready to optimize your presence.
                <br />
                <br />
              </p>
                    <div style={{ marginTop: '1.5rem' }}>
                      <a href="#contact" className="about-cta-button">
                        Build your AI narrative
                      </a>
                    </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;