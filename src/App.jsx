import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Work from './pages/Work';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-primary">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 