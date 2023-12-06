import React from "react";
import { Link } from "react-router-dom";
import "./main.css";
const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Professional React App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2023 Professional React App</p>
      </footer>
    </div>
  );
};

export default Layout;
