import React from 'react';
import Button from '../components/Button';

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Content Developer',
      type: 'Full-time',
      location: 'Bangalore',
      description: 'Create educational content for SSLC, PUC, and KCET students.'
    },
    {
      id: 2,
      title: 'Subject Matter Expert - Mathematics',
      type: 'Full-time',
      location: 'Remote',
      description: 'Develop curriculum and teaching materials for mathematics.'
    },
    {
      id: 3,
      title: 'Video Editor',
      type: 'Part-time',
      location: 'Bangalore',
      description: 'Edit educational videos and create engaging content.'
    }
  ];

  return (
    <div className="careers">
      <section className="hero">
        <h1>Join Our Team</h1>
        <p>Be part of revolutionizing education in Karnataka</p>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Why Work at Parikshe?</h2>
          <div className="features">
            <div className="feature-card">
              <h3>Impactful Work</h3>
              <p>Make a real difference in students' lives across Karnataka</p>
            </div>
            <div className="feature-card">
              <h3>Growth Opportunities</h3>
              <p>Continuous learning and career development</p>
            </div>
            <div className="feature-card">
              <h3>Innovative Environment</h3>
              <p>Work with cutting-edge edtech solutions</p>
            </div>
            <div className="feature-card">
              <h3>Work-Life Balance</h3>
              <p>Flexible working hours and remote options</p>
            </div>
          </div>

          <h2>Current Openings</h2>
          <div className="job-listings">
            {jobOpenings.map(job => (
              <div key={job.id} className="job-card">
                <h3>{job.title}</h3>
                <div className="job-meta">
                  <span>{job.type}</span>
                  <span>{job.location}</span>
                </div>
                <p>{job.description}</p>
                <Button>Apply Now</Button>
              </div>
            ))}
          </div>

          <div className="contact-info">
            <h2>Don't see a suitable position?</h2>
            <p>Send us your resume at <a href="mailto:careers@parikshe.in">careers@parikshe.in</a></p>
            <p>For institutional queries or collaborations, reach out to us at <a href="mailto:padmashree@parikshe.in">padmashree@parikshe.in</a> or call 6366548224</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
