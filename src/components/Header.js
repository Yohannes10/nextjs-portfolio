import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background-color: #333;
        }

        li {
          display: inline-block;
          margin-right: 20px; /* Add spacing between the navigation elements */
        }

        li:last-child {
          margin-right: 0; /* Remove margin from the last navigation element */
        }

        li a {
          display: block;
          color: white;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
        }
      `}</style>
    </>
  );
};

export default Header;
