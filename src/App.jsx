import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Toast from './components/Toast';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
import SslcStudyPage from './pages/SslcStudyPage';
import Blogs from './pages/Blogs';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Payment from './pages/Payment';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import './App.css';

function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <Router>
          <div className="App">
            <Header />
            <Toast />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/study" element={<SslcStudyPage />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/terms" element={<TermsAndConditions />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/payment" element={<Payment />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </ToastProvider>
  );
}

export default App;
