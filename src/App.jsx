import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
// Importing components for different pages
import Navbar from './components/NavBar'
import About from './components/About';
import Services from './components/Services';

import Blog from './components/Blog';
import Contact from './components/Contact';



// এখানে আপনার পেজ কম্পোনেন্টগুলো তৈরি করুন
// const Home = () => <h2>Home Page</h2>;
// const About = () => <h2>About Us</h2>;
// const Services = () => <h2>Our Services</h2>;
// const Contact = () => <h2>Contact Us</h2>;


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>



    </>
  )
}

export default App
