import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { ToastContext } from '../context/ToastContext';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getCartCount } = useContext(CartContext);
  const { showToast } = useContext(ToastContext);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      showToast(`Searching for: "${searchQuery}". Search functionality will be implemented soon!`, 'info');
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <Link to="/">PARIKSHE</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/study">SSLC Study</Link></li>
        </ul>
        <div className="nav-actions">
          <button
            className="search-btn"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Search"
          >
            🔍
          </button>
          <Link to="/payment" className="cart-btn">
            🛒
            {getCartCount() > 0 && <span className="cart-badge">{getCartCount()}</span>}
          </Link>
          {isSearchOpen && (
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                placeholder="Search courses, subjects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button type="submit">Search</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;