import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap'; 
import axios from 'axios';
import logo from '../png/logo.jpg';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoginTabActive, setIsLoginTabActive] = useState(true);
  
  const location = useLocation();

  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Debounce function
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  // Fetch suggestions from server
  const fetchSuggestions = async (query) => {
    if (query.length < 3) return;
    setIsSearching(true);
    try {
      const response = await axios.get(`https://pets.сделай.site/api/search`, {
        params: { query }
      });
      if (response.status === 200) {
        setSuggestions(response.data.orders);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      setSuggestions([]);
    } finally {
      setIsSearching(false);
    }
  };

  // Handle search input change with debounce
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    debounceFetchSuggestions(e.target.value);
  };

  // Debounced function
  const debounceFetchSuggestions = useCallback(debounce(fetchSuggestions, 1000), []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Trigger search logic here
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo} className="w-25 rounded-3" alt="logo" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className={`nav-link ${location.pathname === '/' ? 'disabled' : ''}`}>
                  Главная
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/myAccount" className={`nav-link ${location.pathname === '/myAccount' ? 'disabled' : ''}`}>
                  Личный кабинет
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/petsAdd" className={`nav-link ${location.pathname === '/petsAdd' ? 'disabled' : ''}`}>
                  Добавить объявление
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/petsSearch" className={`nav-link ${location.pathname === '/petsSearch' ? 'disabled' : ''}`}>
                  Поиск по объявлениям
                </Link>
              </li>
            </ul>

            {/* Search Bar */}
            <form className="d-flex mb-2 mb-lg-0" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Поиск"
                value={searchQuery}
                onChange={handleSearchChange}
                aria-label="Search"
              />
              <button className="btn btn-primary">Поиск</button>
            </form>
          </div>
        </div>
      </nav>

      {/* Suggestions Dropdown */}
      {searchQuery.length >= 3 && suggestions.length > 0 && (
        <ul className="list-group position-absolute" style={{ zIndex: 1000 }}>
          {suggestions.map((item) => (
            <li key={item.id} className="list-group-item">
              <Link to={`/order/${item.id}`}>
                {item.description} - {item.district}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
