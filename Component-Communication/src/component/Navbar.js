import "./../index.css";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="navbar-container">
          <div className="logo">
            <a href="/">Logo</a>
          </div>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </nav>
    </>
  );
}
