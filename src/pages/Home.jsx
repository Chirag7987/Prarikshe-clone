import React, { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard';
import Button from '../components/Button';
import { fetchCourses, fetchTestimonials, fetchFAQs, fetchStats } from '../services/api';

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [coursesData, testimonialsData, faqsData, statsData] = await Promise.all([
          fetchCourses(),
          fetchTestimonials(),
          fetchFAQs(),
          fetchStats()
        ]);
        setCourses(coursesData);
        setTestimonials(testimonialsData);
        setFaqs(faqsData);
        setStats(statsData);
        setLoading(false);
      } catch {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>Karnataka's Largest Learning Destination For SSLC, PUC & KCET</h1>
        <p>At Parikshe we make the examination journey seamless, impactful, and focused on results!</p>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">{stats.students}</span>
            <span className="stat-label">Students</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.appDownloads}</span>
            <span className="stat-label">App Downloads</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.lectures}</span>
            <span className="stat-label">Lectures</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.schoolCollaborations}</span>
            <span className="stat-label">School Collaborations</span>
          </div>
        </div>
        <p>Trusted by over 1 lakh+ subscribers, PARIKSHE is revolutionizing the exam prep process for every student in Karnataka</p>
      </section>

      {/* Why Parikshe Section */}
      <section className="why-parikshe">
        <h2 className="section-title">Why PARIKSHE?</h2>
        <p className="section-subtitle">Because you deserve the best tools to succeed</p>
        <div className="features">
          <div className="feature-card">
            <h3>Topic wise video Lectures</h3>
            <p>by experienced knowledgeable teachers</p>
          </div>
          <div className="feature-card">
            <h3>Simple, Effective Notes</h3>
            <p>made for quick understanding and retention</p>
          </div>
          <div className="feature-card">
            <h3>All Content Explained in your language</h3>
            <p>your comfort</p>
          </div>
          <div className="feature-card">
            <h3>Complete Previous Year Question (PYQ) Coverage</h3>
            <p>for better exam readiness</p>
          </div>
          <div className="feature-card">
            <h3>Instantly Solving Doubts through the PARIKSHE app</h3>
            <p>Live Revision Classes before exams to boost your confidence</p>
          </div>
          <div className="feature-card">
            <h3>Parikshe App Your One-Stop Solution</h3>
            <p>for Karnataka's SSLC, PUC and KCET Preparation</p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-section">
        <h2 className="section-title">Our Courses</h2>
        <div className="courses-grid">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2 className="section-title">Testimonials</h2>
        <p className="section-subtitle">Stories of Success</p>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <p>"{testimonial.message}"</p>
              <div className="testimonial-author">- {testimonial.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <h2 className="section-title">FAQ</h2>
        <div>
          {faqs.map(faq => (
            <div key={faq.id} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(faq.id)}>
                {faq.question}
                <span>{openFAQ === faq.id ? '-' : '+'}</span>
              </div>
              <div className={`faq-answer ${openFAQ === faq.id ? 'open' : ''}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
