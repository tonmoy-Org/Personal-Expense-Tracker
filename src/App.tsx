import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPages';
import Navbar from './components/Navbar';
import { ExpenseProvider } from './redux/ExpenseContext';
import Footer from './components/Footer';
import About from './Pages/About';
import Contact from './Pages/Contact';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsOfService from './Pages/TermsOfService';



function App() {
  return (
    <ExpenseProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Routes>
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
        <Routes>
          <Route path="/termsOfService" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </Router>
    </ExpenseProvider>
  );
}

export default App;
