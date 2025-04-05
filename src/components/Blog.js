import React from 'react';
import './Blog.css'; // Importing CSS for styling

const PublishedBlog = () => {
  // Sample blog content with "Coming Soon" message
  const blog = {
    title: "Updates Coming Soon!",
    content: `
      <p style="text-align: center;" >Over the next few weeks, I will be rolling out some updates. <strong>Stay tuned!</strong></p>
    `,
    author: "Mamun",
    date: "Saturday, 5th April 2025",
  };

  return (
    <div className="published-blog-container">
      <h1>{blog.title}</h1>
      <div className="blog-meta">
        <span className="author">By {blog.author}</span>
        <span className="date">{blog.date}</span>
      </div>
      <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
};

export default PublishedBlog;
