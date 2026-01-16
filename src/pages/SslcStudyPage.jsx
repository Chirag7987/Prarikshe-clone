import React, { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard';
import Button from '../components/Button';
import { fetchCourses } from '../services/api';

const SslcStudyPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const subjects = [
    { name: 'Mathematics', description: 'Algebra, Geometry, Trigonometry & more', icon: '📐' },
    { name: 'Science', description: 'Physics, Chemistry, Biology fundamentals', icon: '🔬' },
    { name: 'English', description: 'Grammar, Literature & Comprehension', icon: '📚' },
    { name: 'Social Studies', description: 'History, Geography, Civics & Economics', icon: '🌍' },
    { name: 'Kannada', description: 'Language & Literature', icon: '🔤' },
    { name: 'Sanskrit', description: 'Language & Classical Studies', icon: '🏛️' }
  ];
  
  useEffect(() => {
    fetchCourses()
      .then(data => {
        // Filter SSLC courses
        const sslcCourses = data.filter(course => course.level === 'SSLC');
        setCourses(sslcCourses);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching courses:', err);
        setError('Error fetching courses. Please try again later.');
        setLoading(false);
        // Set some fallback courses for demo
        setCourses([
          {
            id: 1,
            name: "SSLC Mathematics",
            description: "Complete SSLC Maths preparation with video lectures and notes.",
            subject: "Mathematics",
            level: "SSLC",
            lectures: 50,
            price: 0
          },
          {
            id: 2,
            name: "SSLC Science",
            description: "Physics, Chemistry, Biology for SSLC students.",
            subject: "Science",
            level: "SSLC",
            lectures: 75,
            price: 0
          },
          {
            id: 3,
            name: "SSLC English Premium",
            description: "Advanced English with grammar, literature and comprehension skills.",
            subject: "English",
            level: "SSLC",
            lectures: 60,
            price: 499
          },
          {
            id: 4,
            name: "SSLC Social Studies Complete",
            description: "History, Geography, Civics & Economics for SSLC with practice tests.",
            subject: "Social Studies",
            level: "SSLC",
            lectures: 80,
            price: 599
          },
          {
            id: 5,
            name: "SSLC Kannada Masterclass",
            description: "Language and literature masterclass with focus on exam preparation.",
            subject: "Kannada",
            level: "SSLC",
            lectures: 45,
            price: 399
          }
        ]);
      });
  }, []);

  const handleDownloadApp = () => {
    // Redirect to app store or show download options
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('android')) {
      window.open('https://play.google.com/store/apps/details?id=com.parikshe.app', '_blank');
    } else if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
      window.open('https://apps.apple.com/app/parikshe/id123456789', '_blank');
    } else {
      alert('Download Parikshe app from Google Play Store or App Store!');
    }
  };

  const handleStartLearning = (subjectName) => {
    alert(`Starting ${subjectName} learning module. This feature will be available soon!`);
  };

  if (loading) return <div className="loading">Loading SSLC study materials...</div>;
  if (error && courses.length === 0) return <div className="error">{error}</div>;

  return (
    <div className="sslc-study">
      <section className="hero">
        <h1>SSLC Study Materials</h1>
        <p>Comprehensive preparation for Karnataka SSLC examinations</p>
      </section>

      <section className="study-content">
        <div className="container">
          <div className="study-overview">
            <h2>Why Choose Parikshe for SSLC?</h2>
            <div className="features">
              <div className="feature-card">
                <h3>Expert Faculty</h3>
                <p>Learn from experienced teachers with years of SSLC teaching experience</p>
              </div>
              <div className="feature-card">
                <h3>Complete Syllabus Coverage</h3>
                <p>All topics covered with detailed explanations and examples</p>
              </div>
              <div className="feature-card">
                <h3>Previous Year Questions</h3>
                <p>Practice with PYQs and model question papers</p>
              </div>
              <div className="feature-card">
                <h3>Doubt Clearing</h3>
                <p>Get your doubts cleared instantly through our app</p>
              </div>
            </div>
          </div>

          <div className="subjects-section">
            <h2>Subjects Covered</h2>
            <div className="subjects-grid">
              {subjects.map((subject, index) => (
                <div key={index} className="subject-card">
                  <div className="subject-icon">{subject.icon}</div>
                  <h3>{subject.name}</h3>
                  <p>{subject.description}</p>
                  <Button variant="secondary" onClick={() => handleStartLearning(subject.name)}>Start Learning</Button>
                </div>
              ))}
            </div>
          </div>

          <div className="courses-section">
            <h2>Available Courses</h2>
            <div className="courses-grid">
              {courses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>

          <div className="cta-section">
            <h2>Ready to Excel in SSLC?</h2>
            <p>Join thousands of students who have achieved success with Parikshe</p>
            <Button onClick={handleDownloadApp}>Download App Now</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SslcStudyPage;