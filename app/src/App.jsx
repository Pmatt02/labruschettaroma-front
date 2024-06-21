import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';

// Import pages
import Home from './pages/Home/home';
import Menu from './pages/Menu/menu';
import DoveSiamo from './pages/DoveSiamo/doveSiamo';
import Contatti from './pages/Contatti/contatti';
import Footer from './components/Footer/Footer';

// per visualizzare l'header in tutte le pagine (children è il contenuto della pagina)
function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/menu" element={<Layout><Menu /></Layout>} />
        <Route path="/doveSiamo" element={<Layout><DoveSiamo /></Layout>} />
        <Route path="/contatti" element={<Layout><Contatti /></Layout>} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
