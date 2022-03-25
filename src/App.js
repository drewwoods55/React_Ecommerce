import logo from './logo.svg';
import './App.css';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home';
import Product from './Products';
import Contact from './Contact';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      <Footer />
      </Router>
    </>
  );
}


export default App;

