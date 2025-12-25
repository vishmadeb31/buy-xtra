import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Listing } from './pages/Listing';
import { ProductDetail } from './pages/ProductDetail';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#F1F3F6] font-sans text-[#212121]">
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mobiles" element={<Listing searchQuery={searchQuery} category="mobile" />} />
            <Route path="/electronics" element={<Listing searchQuery={searchQuery} category="electronics" />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
