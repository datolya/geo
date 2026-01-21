import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      message: ''
    });

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Rate limiting check
  const checkRateLimit = (email) => {
    const lastSubmit = localStorage.getItem(`lastSubmit_${email}`);
    const now = Date.now();
    const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds

    if (lastSubmit && (now - parseInt(lastSubmit)) < oneHour) {
      const timeLeft = Math.ceil((oneHour - (now - parseInt(lastSubmit))) / 60000);
      return { allowed: false, timeLeft };
    }
    return { allowed: true };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check rate limit
    const rateLimitCheck = checkRateLimit(formData.email);
    if (!rateLimitCheck.allowed) {
      setStatus(`Please wait ${rateLimitCheck.timeLeft} minutes before sending another message.`);
      setIsSubmitting(false);
      return;
    }

    try {
      // Send email using EmailJS
    await emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.message,
        time: new Date().toLocaleString()
      },
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    );

      // Save timestamp for rate limiting
      localStorage.setItem(`lastSubmit_${formData.email}`, Date.now().toString());

      setStatus("Great! Our team's crafting a plan and will be in touch");
      setFormData({ name: '', email: '', phone: '', message: '' });  // ADD phone: ''
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus("Oops! Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        /* Contact section with dark background matching Hero */
        .contact-section {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #2d2420 0%, #3b2f2f 50%, #4a3f3a 100%);
          min-height: 100vh;
          padding: 80px 0;
          display: flex;
          align-items: center;
        }

        /* Data pipeline network background */
        .data-pipeline-network {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
          pointer-events: none;
        }

        /* Pipeline lines */
        .pipeline-line {
          position: absolute;
          background: rgba(178, 140, 104, 0.2);
          pointer-events: none;
        }

        .pipeline-line.horizontal {
          height: 2px;
        }

        .pipeline-line.vertical {
          width: 2px;
        }

        .pipeline-line.diagonal {
          height: 2px;
        }

        /* Flowing gradient animation for horizontal lines */
        @keyframes flow-horizontal {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

       .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        @media (max-width: 576px) {
          .form-row {
            grid-template-columns: 1fr;
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

        .contact-section h2 {
          color: #d4a373;
          font-family: 'Proxima Nova', sans-serif;
          font-weight: 700;
          letter-spacing: 1px;
          text-shadow: 0 2px 20px rgba(212, 163, 115, 0.3);
          position: relative;
          z-index: 2;
        }

        /* Form container with glassmorphism and glow */
        .contact-form-container {
          background: linear-gradient(135deg,
            rgba(249, 247, 244, 0.95) 0%,
            rgba(232, 228, 222, 0.9) 40%,
            rgba(212, 207, 199, 0.92) 100%);
          backdrop-filter: blur(20px) saturate(180%);
          padding: 50px;
          border-radius: 24px;
          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.5),
            0 0 60px rgba(212, 163, 115, 0.2);
          border: 2px solid rgba(212, 163, 115, 0.5);
          max-width: 700px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          animation: form-glow 4s ease-in-out infinite;
        }

        @keyframes form-glow {
          0%, 100% {
            box-shadow:
              0 20px 60px rgba(0, 0, 0, 0.6),
              inset 0 1px 0 rgba(255, 255, 255, 0.5),
              0 0 60px rgba(212, 163, 115, 0.2);
          }
          50% {
            box-shadow:
              0 20px 60px rgba(0, 0, 0, 0.6),
              inset 0 1px 0 rgba(255, 255, 255, 0.5),
              0 0 80px rgba(212, 163, 115, 0.4);
          }
        }

        .contact-section .form-control {
          background: rgba(255, 255, 255, 0.95);
          border: 2px solid rgba(160, 130, 100, 0.3);
          border-radius: 12px;
          padding: 16px;
          font-family: 'Proxima Nova', sans-serif;
          color: #3b2f2f;
          font-size: 1rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .contact-section .form-control:focus {
          border-color: #d4a373;
          box-shadow:
            0 0 20px rgba(212, 163, 115, 0.4),
            inset 0 0 10px rgba(212, 163, 115, 0.1);
          background: rgba(255, 255, 255, 1);
          outline: none;
          transform: translateY(-2px);
        }

        .contact-section .form-control::placeholder {
          color: #999;
        }

        /* Powerful submit button with animation */
        .contact-submit-btn {
          display: inline-block;
          width: 100%;
          padding: 18px 48px;
          background: linear-gradient(135deg, #a67c5c 0%, #d4a373 50%, #b8906e 100%);
          color: #fefbf6;
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-decoration: none;
          text-transform: uppercase;
          border-radius: 12px;
          border: 2px solid rgba(212, 163, 115, 0.6);
          box-shadow:
            0 8px 30px rgba(212, 163, 115, 0.4),
            inset 0 0 10px rgba(255, 255, 255, 0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .contact-submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .contact-submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transition: left 0.5s ease;
        }

        .contact-submit-btn::after {
          content: '→';
          position: absolute;
          right: 30px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.3rem;
          transition: all 0.3s ease;
        }

        .contact-submit-btn:hover:not(:disabled) {
          transform: translateY(-4px) scale(1.02);
          box-shadow:
            0 15px 45px rgba(212, 163, 115, 0.6),
            inset 0 0 15px rgba(255, 255, 255, 0.3),
            0 0 30px rgba(212, 163, 115, 0.4);
          border-color: rgba(212, 163, 115, 0.8);
          color: #fffaf3;
        }

        .contact-submit-btn:hover:not(:disabled)::before {
          left: 100%;
        }

        .contact-submit-btn:hover:not(:disabled)::after {
          right: 20px;
        }

        .contact-submit-btn:active:not(:disabled) {
          transform: translateY(-2px) scale(1);
          box-shadow:
            0 8px 25px rgba(212, 163, 115, 0.5),
            inset 0 0 10px rgba(255, 255, 255, 0.2);
        }

        /* Status alert with animation */
        .contact-status-alert {
          background: rgba(212, 163, 115, 0.3);
          border: 2px solid rgba(212, 163, 115, 0.6);
          color: #3b2f2f;
          padding: 16px;
          border-radius: 12px;
          margin-top: 20px;
          font-family: 'Proxima Nova', sans-serif;
          font-weight: 600;
          text-align: center;
          animation: alert-appear 0.4s ease-out;
        }

        @keyframes alert-appear {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .contact-form-container {
            padding: 30px 20px;
          }

          .contact-submit-btn {
            padding: 16px 32px;
            font-size: 1rem;
          }
        }
      `}</style>

      <section id="contact" className="contact contact-section">
        <div className="data-pipeline-network">
          {/* Animated pipeline lines with gradient flow */}
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

        <div className="container">
          <h2 className="text-center mb-5">Ask A Quote</h2>
          <div className="contact-form-container">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 form-row">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                className="form-control"
                placeholder="Phone (Optional)"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Your Data Challenge"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="contact-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {status && (
                <div className="contact-status-alert" role="alert">
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;