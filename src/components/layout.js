import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <main>{children}</main>

      <style jsx>{`
        .layout-container {
          margin: 0 auto;
          max-width: 1280px;
          padding: 0 1rem;
        }

        main {
          margin-top: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Layout;
