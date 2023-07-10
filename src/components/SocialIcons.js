import React from 'react';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      {/* Social media icons */}
      <a href="https://twitter.com">
        <img src="/twitter-logo.png" alt="Twitter" />
      </a>
      <a href="https://linkedin.com">
        <img src="/linkedin-logo.png" alt="LinkedIn" />
      </a>
      <a href="https://github.com">
        <img src="/github-icons.png" alt="GitHub" />
      </a>

      {/* Styles */}
      <style jsx>{`
        .social-icons {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .social-icons img {
          width: 24px;
          height: 24px;
        }
      `}</style>
    </div>
  );
};

export default SocialIcons;
