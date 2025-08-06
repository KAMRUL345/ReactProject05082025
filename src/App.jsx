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
import Contact from './components/Contact';
import Blog from './components/Blog';



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
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>

    {/* <About /> */}

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo react" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
