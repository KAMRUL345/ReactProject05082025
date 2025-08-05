import { Link } from 'react-router-dom';
import './Navbar.css'; // স্টাইলিং এর জন্য CSS ফাইল
// import './Navbar.css'; // স্টাইলিং এর জন্য CSS ফাইল

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">My Website</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;