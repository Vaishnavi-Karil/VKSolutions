import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

// Import Pages
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Industries from './pages/Industries/Industries';
import Portfolio from './pages/Portfolio/Portfolio';
import Technologies from './pages/Technologies/Technologies';

import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import CaseStudy from './pages/CaseStudy/CaseStudy';
import Utility from './pages/Utility/Utility';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/technologies" element={<Technologies />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-study/luminapay" element={<CaseStudy />} />
          <Route path="/utility" element={<Utility />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
