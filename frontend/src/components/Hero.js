import React, { useState, useEffect, useRef } from 'react';

const phrases = [
  "AI Search Optimization",
  "LLM Visibility",
  "Semantic Content Rewrite",
  "AI Presence Auditing",
  "User Persona Simulation"
];

function Hero() {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const animationRef = useRef(null);

  // Typing animation
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentPhrase.length) {
          setText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
        }
      }
    }, isDeleting ? 40 : 40);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  // Animate particles
  useEffect(() => {
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      <style>{`
        /* Flowing gradient animation for horizontal lines */
        @keyframes flow-horizontal {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        /* Flowing gradient animation for vertical lines */
        @keyframes flow-vertical {
          0% {
            background-position: 50% 0%;
          }
          100% {
            background-position: 50% 200%;
          }
        }

        .pipeline-line.animated-flow {
          background: linear-gradient(90deg,
            rgba(178, 140, 104, 0.15) 0%,
            rgba(178, 140, 104, 0.25) 20%,
            rgba(212, 163, 115, 0.35) 40%,
            rgba(212, 163, 115, 0.4) 50%,
            rgba(212, 163, 115, 0.35) 60%,
            rgba(178, 140, 104, 0.25) 80%,
            rgba(178, 140, 104, 0.15) 100%
          );
          background-size: 200% 100%;
          animation: flow-horizontal 6s linear infinite;
          opacity: 1;
        }

        .pipeline-line.animated-flow-vertical {
          background: linear-gradient(180deg,
            rgba(178, 140, 104, 0.15) 0%,
            rgba(178, 140, 104, 0.25) 20%,
            rgba(212, 163, 115, 0.35) 40%,
            rgba(212, 163, 115, 0.4) 50%,
            rgba(212, 163, 115, 0.35) 60%,
            rgba(178, 140, 104, 0.25) 80%,
            rgba(178, 140, 104, 0.15) 100%
          );
          background-size: 100% 200%;
          animation: flow-vertical 6s linear infinite;
          opacity: 1;
        }

        /* Hero text container with light grey gradient */
        .hero-text-container {
          background: linear-gradient(135deg, #f9f7f4 0%, #e8e4de 40%, #d4cfc7 100%) !important;
          backdrop-filter: blur(12px);
          padding: 50px 50px;
          border-radius: 20px;
          box-shadow:
            0 15px 50px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.4);
          border: 2px solid rgba(212, 163, 115, 0.4);
          position: relative;
          transition: all 0.3s ease;
          animation: panelGlow 3s ease-in-out infinite;
          max-width: 900px;
        }

        /* Professional CTA Button */
        .hero-cta-button {
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
          margin-top: 2rem;

          /* Fade in on page load with dramatic pause */
          opacity: 0;
          animation: fade-in-up 1.2s ease 2.2s forwards;
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

        /* Staggered fade-in for intro paragraphs */
        .intro-paragraph {
          opacity: 0;
          animation: fade-in-up 0.8s ease forwards;
        }

        .intro-paragraph:nth-child(1) {
          animation-delay: 0.2s;
        }

        .intro-paragraph:nth-child(2) {
          animation-delay: 0.5s;
        }

        .intro-paragraph:nth-child(3) {
          animation-delay: 0.8s;
        }

        /* Origin text fade in after paragraphs */
        .hero-origin {
          opacity: 0;
          animation: fade-in-up 0.8s ease 1.1s forwards;
        }

        .hero-cta-button::before {
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

        .hero-cta-button:hover::before {
          left: 100%;
        }

        .hero-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(212, 163, 115, 0.4),
                      inset 0 0 8px rgba(255, 255, 255, 0.25);
          border-color: rgba(212, 163, 115, 0.6);
          color: #fffaf3;
        }
      `}</style>

      <header id="home">
        <div className="data-pipeline-network">
          {/* Animated pipeline lines with gradient flow - NO NODES */}
          <div className="pipeline-line horizontal animated-flow" style={{left: '5%', right: '5%', top: '15%'}}></div>
          <div className="pipeline-line horizontal animated-flow" style={{left: '5%', right: '5%', top: '50%', animationDelay: '1s'}}></div>
          <div className="pipeline-line horizontal animated-flow" style={{left: '5%', right: '5%', bottom: '15%', animationDelay: '2s'}}></div>

          <div className="pipeline-line vertical animated-flow-vertical" style={{left: '5%', top: '15%', bottom: '15%'}}></div>
          <div className="pipeline-line vertical animated-flow-vertical" style={{left: '25%', top: '10%', height: '25%', animationDelay: '0.5s'}}></div>
          <div className="pipeline-line vertical animated-flow-vertical" style={{left: '25%', bottom: '10%', height: '25%', animationDelay: '1.5s'}}></div>
          <div className="pipeline-line vertical animated-flow-vertical" style={{right: '25%', top: '10%', height: '25%', animationDelay: '2.5s'}}></div>
          <div className="pipeline-line vertical animated-flow-vertical" style={{right: '25%', bottom: '10%', height: '25%', animationDelay: '0.8s'}}></div>
          <div className="pipeline-line vertical animated-flow-vertical" style={{right: '5%', top: '15%', bottom: '15%', animationDelay: '1.8s'}}></div>

          {/* Diagonal connections with flow */}
          <div className="pipeline-line diagonal animated-flow" style={{left: '5%', top: '15%', width: '25%', transform: 'rotate(-15deg)', transformOrigin: 'left top', animationDelay: '0.3s'}}></div>
          <div className="pipeline-line diagonal animated-flow" style={{left: '5%', bottom: '15%', width: '25%', transform: 'rotate(15deg)', transformOrigin: 'left bottom', animationDelay: '1.3s'}}></div>
          <div className="pipeline-line diagonal animated-flow" style={{right: '5%', top: '15%', width: '25%', transform: 'rotate(15deg)', transformOrigin: 'right top', animationDelay: '2.3s'}}></div>
          <div className="pipeline-line diagonal animated-flow" style={{right: '5%', bottom: '15%', width: '25%', transform: 'rotate(-15deg)', transformOrigin: 'right bottom', animationDelay: '0.7s'}}></div>
        </div>

        <div className="container hero-content">
          <div className="hero-text-container">
            <h1 style={{textAlign: 'left'}}>GEO as a Service</h1>

            <div className="rotating-title" style={{textAlign: 'left', display: 'flex', justifyContent: 'flex-start'}}>
              <span id="rotating-text">{text}</span>
              <span id="cursor">|</span>
            </div>

            <div className="hero-intro">
              <p className="intro-paragraph" style={{paddingLeft: '0px'}}>
                <strong>Clicks are gone. AI visibility is everything.</strong> ChatGPT and Google decide what users see - before they even reach your site.
              </p>

              <p className="intro-paragraph" style={{paddingLeft: '20px'}}>
                <strong>We engineer presence in LLMs.</strong> To dominate AI answers, we must simulate, optimize and track appearance.
               </p>

              <p className="intro-paragraph" style={{paddingLeft: '40px'}}>
                <strong> Our team engineered marketing systems for €100M+ tech giants</strong> We offer industry leading know-how to audit how information is retrieved
              </p>
            </div>

               <p className="hero-origin">
              <em>datolya</em> — Hungarian for date fruit. In a vast desert of noise, dates are rare and concentrated energy. For AI bots, finding a valuable paragraph is just as scarce - unless engineered.
            </p>

            <div style={{textAlign: 'left'}}>
                <a href="#contact" className="hero-cta-button">Get Started</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Hero;