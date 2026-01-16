import React from 'react';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "SSLC Preparation Tips: How to Score 95%+",
      excerpt: "Learn effective strategies and study techniques to excel in your SSLC examinations.",
      date: "January 10, 2026",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "PUC Science Stream: Choosing the Right Subjects",
      excerpt: "A comprehensive guide to help you choose the best subjects for your PUC science stream.",
      date: "January 8, 2026",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "KCET 2026: Complete Preparation Guide",
      excerpt: "Everything you need to know about KCET preparation, important dates, and success strategies.",
      date: "January 5, 2026",
      readTime: "10 min read"
    }
  ];

  const handleReadMore = (blogTitle) => {
    alert(`Opening full article: "${blogTitle}". This feature will be implemented soon!`);
  };

  return (
    <div className="blogs">
      <section className="hero">
        <h1>Parikshe Blogs</h1>
        <p>Insights, tips, and guides for exam success</p>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="blogs-grid">
            {blogs.map(blog => (
              <div key={blog.id} className="blog-card">
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <div className="blog-meta">
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>
                <button className="btn" onClick={() => handleReadMore(blog.title)}>Read More</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;