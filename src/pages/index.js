import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout';
import SocialIcons from '../components/SocialIcons';

const About = () => {
  return (
    <Layout>
      <div className="about-container">
        <div className="content">
          <h1 className="header">About</h1>
          <h2 className="name">Yohannes</h2>
          <SocialIcons />

          {/* Introduction */}
          <p>
            I am a software developer with a passion for learning and building websites. 
            I have a strong educational background in computer science and have gained valuable experience 
            through various projects and internships.
          </p>
          <p>
            I am particularly passionate about JavaScript and its ecosystem. I enjoy exploring the latest 
            web development technologies and frameworks to create responsive and user-friendly applications.
          </p>
          <p>
            Apart from coding, I have a love for dogs and enjoy spending time with them. In my free time, 
            I also like to experiment with different recipes in the kitchen and try my hand at cooking.
          </p>
         
        </div>
        <div className="image">
          <img src="/unnamed.jpg" alt="Profile Picture" />
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .about-container {
          display: flex;
          align-items: center;
          background-color: rgba(59, 130, 246, 0.5);
          box-sizing: border-box;
          border: 0 solid #e5e7eb;
        }

        .header {
          font-size: 2.25rem;
          line-height: 2.5rem;
          line-height: 1.5;
          max-width: 20rem;
        }

        .content {
          flex: 1;
          margin-right: 20px;
          padding: 4rem;
          box-sizing: border-box;
          border: 0 solid #e5e7eb;
        }

        .projects {
          flex: 1;
          box-sizing: border-box;
          border: 0 solid #e5e7eb;
          display: block;
          text-align: -webkit-match-parent;
          z-index: 10;
          box-sizing: border-box;
          border: 0 solid #e5e7eb;
        }

        .image {
          flex: 1;
        }

        img {
          max-width: 100%;
          height: auto;
        }

        ul {
          margin-top: 1rem;
          padding-left: 1.5rem;
        }
      `}</style>
    </Layout>
  );
};

export default About;
