import React from 'react';

function Portfolio() {
  const projects = [
    {
      title: "AWS Lakehouse",
      description: (
        <>
          Production-ready big data, AI & ML
          <br /> Real-time and heavy loads
          <br />
        </>
      ),
      image: "/images/unsplash_aws.jpg",
      link: "https://www.upwork.com/services/product/development-it-cloud-data-engineering-consulting-1960738275191146820?ref=fl_profile"
    },
    {
      title: "GCP Warehouse",
      description: (
        <>
          Enterprise grade warehousing
          <br /> Pipeline automation, BI and A/B tests
          <br />
        </>
      ),
      image: "/images/unsplash_gcp.jpg",
      link: "https://www.upwork.com/services/product/development-it-cloud-data-engineering-consulting-1960738275191146820?ref=fl_profile"
    },
  ];

  const publications = [
    {
      title: "Your Python Project Needs Some Rust (!)",
      link: "https://datolya.github.io/rustify-your-projects/"
    },
    {
      title: "Where's the Spark? - Why Your Big Data Architecture is Flawed",
      link: "https://medium.com/@sebestyengr/why-your-big-data-architecture-is-flawed-a73dd33f8c34"
    },
    {
      title: "Have you thought about the Roman Empire today? Networks and path dependency",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7365639079574622208/"
    }
  ];

  return (
    <>
      <style>{`
        /* Dimmer flowing gradient for horizontal lines */
        @keyframes flow-horizontal-dim {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        /* Dimmer flowing gradient for vertical lines */
        @keyframes flow-vertical-dim {
          0% {
            background-position: 50% 0%;
          }
          100% {
            background-position: 50% 200%;
          }
        }

        .portfolio .pipeline-line.animated-flow-dim {
          background: linear-gradient(90deg,
            rgba(178, 140, 104, 0.03) 0%,
            rgba(178, 140, 104, 0.05) 20%,
            rgba(212, 163, 115, 0.07) 40%,
            rgba(212, 163, 115, 0.08) 50%,
            rgba(212, 163, 115, 0.07) 60%,
            rgba(178, 140, 104, 0.05) 80%,
            rgba(178, 140, 104, 0.03) 100%
          );
          background-size: 200% 100%;
          animation: flow-horizontal-dim 6s linear infinite;
          opacity: 1;
        }

        .portfolio .pipeline-line.animated-flow-vertical-dim {
          background: linear-gradient(180deg,
            rgba(178, 140, 104, 0.03) 0%,
            rgba(178, 140, 104, 0.05) 20%,
            rgba(212, 163, 115, 0.07) 40%,
            rgba(212, 163, 115, 0.08) 50%,
            rgba(212, 163, 115, 0.07) 60%,
            rgba(178, 140, 104, 0.05) 80%,
            rgba(178, 140, 104, 0.03) 100%
          );
          background-size: 100% 200%;
          animation: flow-vertical-dim 6s linear infinite;
          opacity: 1;
        }

        /* Portfolio card styling with light grey gradient */
        .portfolio .portfolio-card {
          background: linear-gradient(135deg, #f9f7f4 0%, #e8e4de 40%, #d4cfc7 100%) !important;
          backdrop-filter: blur(12px);
          border-radius: 20px;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.4);
          border: 2px solid rgba(212, 163, 115, 0.4);
          height: auto;
          min-height: 320px;
          padding: 30px 25px;
          transition: all 0.3s ease;
          font-family: 'Proxima Nova', sans-serif;
        }

        .portfolio .portfolio-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.5);
        }

        .portfolio .portfolio-card img {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-radius: 12px;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #d4c4b0, #c4b4a0);
          opacity: 0.85;
          transition: opacity 0.3s ease;
        }

        .portfolio .portfolio-card:hover img {
          opacity: 1;
        }

        .portfolio .portfolio-card h5 {
          color: #2d2420;
          font-weight: 600;
          font-size: 1.25rem;
          margin-bottom: 14px;
          letter-spacing: 0.3px;
          font-family: 'Proxima Nova', sans-serif;
        }

        .portfolio .portfolio-card p {
          color: #5a4a42;
          font-size: 0.95rem;
          line-height: 1.7;
          font-weight: 400;
          font-family: 'Proxima Nova', sans-serif;
        }

        .portfolio h2 {
          color: #b28c68;
          font-family: 'Proxima Nova', sans-serif;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        /* Publications styling */
        .publications-section h3 {
          color: #b28c68;
          font-family: 'Proxima Nova', sans-serif;
          font-weight: 600;
          font-size: 1.5rem;
          letter-spacing: 0.5px;
        }

        .publications-list {
          max-width: 700px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 30px 40px;
          border: 1px solid rgba(212, 163, 115, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .publication-item {
          padding-bottom: 20px;
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(212, 163, 115, 0.15);
        }

        .publication-item:last-child {
          padding-bottom: 0;
          margin-bottom: 0;
          border-bottom: none;
        }

        .publication-item a {
          color: #d4a373;
          text-decoration: none;
          font-size: 1rem;
          font-family: 'Proxima Nova', sans-serif;
          font-weight: 500;
          line-height: 1.6;
          display: block;
          transition: color 0.2s ease;
        }

        .publication-item a:hover {
          color: #e8b889;
        }
      `}</style>

      <section id="portfolio" className="portfolio" style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #2d2420 0%, #3b2f2f 50%, #4a3f3a 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 0'
      }}>
        <div className="data-pipeline-network">
          {/* Dimmer animated pipeline lines only - no nodes */}
          <div className="pipeline-line horizontal animated-flow-dim" style={{left: '5%', right: '5%', top: '15%'}}></div>
          <div className="pipeline-line horizontal animated-flow-dim" style={{left: '5%', right: '5%', top: '50%', animationDelay: '1s'}}></div>
          <div className="pipeline-line horizontal animated-flow-dim" style={{left: '5%', right: '5%', bottom: '15%', animationDelay: '2s'}}></div>

          <div className="pipeline-line vertical animated-flow-vertical-dim" style={{left: '5%', top: '15%', bottom: '15%'}}></div>
          <div className="pipeline-line vertical animated-flow-vertical-dim" style={{left: '25%', top: '10%', height: '25%', animationDelay: '0.5s'}}></div>
          <div className="pipeline-line vertical animated-flow-vertical-dim" style={{left: '25%', bottom: '10%', height: '25%', animationDelay: '1.5s'}}></div>
          <div className="pipeline-line vertical animated-flow-vertical-dim" style={{right: '25%', top: '10%', height: '25%', animationDelay: '2.5s'}}></div>
          <div className="pipeline-line vertical animated-flow-vertical-dim" style={{right: '25%', bottom: '10%', height: '25%', animationDelay: '0.8s'}}></div>
          <div className="pipeline-line vertical animated-flow-vertical-dim" style={{right: '5%', top: '15%', bottom: '15%', animationDelay: '1.8s'}}></div>

          {/* Dimmer diagonal connections */}
          <div className="pipeline-line diagonal animated-flow-dim" style={{left: '5%', top: '15%', width: '25%', transform: 'rotate(-15deg)', transformOrigin: 'left top', animationDelay: '0.3s'}}></div>
          <div className="pipeline-line diagonal animated-flow-dim" style={{left: '5%', bottom: '15%', width: '25%', transform: 'rotate(15deg)', transformOrigin: 'left bottom', animationDelay: '1.3s'}}></div>
          <div className="pipeline-line diagonal animated-flow-dim" style={{right: '5%', top: '15%', width: '25%', transform: 'rotate(15deg)', transformOrigin: 'right top', animationDelay: '2.3s'}}></div>
          <div className="pipeline-line diagonal animated-flow-dim" style={{right: '5%', bottom: '15%', width: '25%', transform: 'rotate(-15deg)', transformOrigin: 'right bottom', animationDelay: '0.7s'}}></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '960px' }}>
          <h2 className="text-center mb-5">Data Solutions</h2>
          <div className="row g-4 justify-content-center">
            {projects.map((project, index) => (
              <div key={index} className="col-md-6" style={{ maxWidth: '450px' }}>
                <div
                  className="portfolio-card"
                  onClick={() => window.open(project.link, '_blank')}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={project.image} alt={project.title} />
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Publications Section */}
          <div className="publications-section" style={{ marginTop: '80px' }}>
            <h3 className="text-center mb-4">What's In The World of Data?</h3>

            <div className="publications-list">
              {publications.map((publication, index) => (
                <div key={index} className="publication-item">
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {publication.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;