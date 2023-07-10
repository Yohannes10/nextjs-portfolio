import React from 'react';
import Layout from '../components/layout';

const Contact = () => {
  return (
    <Layout>
      {/* Contact Container */}
      <div className="contact-container">
        <h1>Contact</h1>
        <p>Email: yohanneslebelo@gmail.com</p>
        <p>Phone: 123-456-7890</p>
      </div>

      {/* Styles */}
      <style jsx>{`
        .contact-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          box-sizing: border-box;
          border: 1px solid #e5e7eb;
          border-radius: 4px;
          background-color: #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </Layout>
  );
};

export default Contact;
