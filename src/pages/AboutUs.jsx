import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="hero">
        <h1>About PARIKSHE</h1>
        <p>Revolutionizing exam preparation for Karnataka students</p>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>What is Parikshe?</h2>
          <p>
            Parikshe is a student-first e-learning platform built to support SSLC, PUC, and KCET exam preparation across Karnataka.
            Born out of years of grassroots experience by the educators at SIFF Scholars, Parikshe brings the power of expert teaching,
            curated resources, and consistent support to students via the Parikshe App.
          </p>

          <h2>Our Mission</h2>
          <p>
            To make quality education accessible to every student in Karnataka, regardless of their location or economic background.
            We believe that every student deserves the best tools and resources to succeed in their examinations.
          </p>

          <h2>Why Choose Parikshe?</h2>
          <div className="features">
            <div className="feature-card">
              <h3>Expert Teachers</h3>
              <p>Learn from experienced educators with proven track records</p>
            </div>
            <div className="feature-card">
              <h3>Local Language Content</h3>
              <p>All content explained in Kannada and English for better understanding</p>
            </div>
            <div className="feature-card">
              <h3>Doubt Solving Support</h3>
              <p>24/7 doubt clearing support through our premium plans</p>
            </div>
            <div className="feature-card">
              <h3>Comprehensive Coverage</h3>
              <p>Complete syllabus coverage with PYQs and mock tests</p>
            </div>
          </div>

          <h2>Our Reach</h2>
          <p>
            Parikshe has a presence in 33 districts and 27 cities across Karnataka, reaching thousands of students
            through digital learning and field outreach. We partner with schools and educational institutions
            to bring quality education to rural and urban areas alike.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;