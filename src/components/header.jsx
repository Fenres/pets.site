import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap'; 

import logo from '../png/logo.jpg';

const Header = () => {
  const [show, setShow] = useState(false); 
  const [showModal, setShowModal] = useState(false);
  const [isLoginTabActive, setIsLoginTabActive] = useState(true);
  
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isActive = (path) => location.pathname === path;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo} className="w-25 rounded-3" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${isActive('/') ? 'disabled' : ''}`} aria-current="page">
                  Главная
                </Link>
              </li>
              <li className="nav-item">
              <Link
                  to="/myAccount"
                  className={`nav-link ${isActive('/myAccount') ? 'disabled' : ''}`} >
                  Личный кабинет
                </Link>
              </li>
              <li className="nav-item">
              <Link
                  to="/petsAdd"
                  className={`nav-link ${isActive('/petsAdd') ? 'disabled' : ''}`} >
                  Добавить объявление
                </Link>
              </li>
              <li className="nav-item">
              <Link
                  to="/petsSearch"
                  className={`nav-link ${isActive('/petsSearch') ? 'disabled' : ''}`} >
                  Поиск по объявлениям
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-primary me-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Вход / Регистрация
            </button>
            <form className="d-flex" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                list="pets"
                placeholder="Поиск"
                aria-label="Search"
              />
              <button className="btn btn-primary me-2">Поиск</button>

              <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="authModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="authModalLabel">
                        Авторизация
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <ul className="nav nav-tabs" id="authTabs" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="login-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#login"
                            type="button"
                            role="tab"
                            aria-controls="login"
                            aria-selected="true"
                          >
                            Вход
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="register-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#register"
                            type="button"
                            role="tab"
                            aria-controls="register"
                            aria-selected="false"
                          >
                            Регистрация
                          </button>
                        </li>
                      </ul>
                      <div className="tab-content" id="authTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="login"
                          role="tabpanel"
                          aria-labelledby="login-tab"
                        >
                          {/* Login form fields */}
                          <form onSubmit={handleLoginSubmit}>
                            <div className="mb-3">
                              <label htmlFor="loginEmail" className="form-label">
                                Email
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="loginEmail"
                                required
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="loginPassword"
                                className="form-label"
                              >
                                Пароль
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                id="loginPassword"
                                required
                              />
                            </div>
                            <button
                              type="submit"
                              className="btn btn-primary w-100"
                            >
                              Войти
                            </button>
                          </form>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="register"
                          role="tabpanel"
                          aria-labelledby="register-tab"
                        >
                          <form onSubmit={handleRegisterSubmit}>
                            <div className="mb-3">
                              <label
                                htmlFor="registerName"
                                className="form-label"
                              >
                                Имя
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="registerName"
                                required
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="registerPhone"
                                className="form-label"
                              >
                                Телефон
                              </label>
                              <input
                                type="tel"
                                className="form-control"
                                id="registerPhone"
                                required
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="registerEmail"
                                className="form-label"
                              >
                                Email
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="registerEmail"
                                required
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="registerPassword"
                                className="form-label"
                              >
                                Пароль
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                id="registerPassword"
                                required
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="registerPasswordConfirm"
                                className="form-label"
                              >
                                Подтверждение пароля
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                id="registerPasswordConfirm"
                                required
                              />
                            </div>
                            <div className="mb-3 form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="registerConfirm"
                                required
                              />
                              <label
                                className="form-check-label"
                                htmlFor="registerConfirm"
                              >
                                Согласие на обработку данных
                              </label>
                            </div>
                            <button
                              type="submit"
                              className="btn btn-primary w-100"
                            >
                              Зарегистрироваться
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <datalist id="pets">
                  <option value="Кошка" />
                  <option value="Собака" />
                  <option value="Корова" />
                  <option value="Крокодил" />
                  <option value="Сова" />
                </datalist>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
