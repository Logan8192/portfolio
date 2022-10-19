import React, { useState } from 'react';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import { BsFileCode } from '@react-icons/all-files/bs/BsFileCode';
import { BsCode } from '@react-icons/all-files/bs/BsCode';
import { MdLanguage } from '@react-icons/all-files/md/MdLanguage';

export default function Navbar() {
  const { t, languages, changeLanguage } = useI18next();
  const [isActive, setIsActive] = useState(false);

  function activateNavbarBurger() {
    setIsActive(!isActive);
  }

  return (
    <nav
      className="navbar is-black is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          {t('name')}
        </Link>

        <button
          type="button"
          className={`button is-black navbar-burger ${
            isActive ? 'is-active' : ''
          }`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarItems"
          onClick={() => {
            activateNavbarBurger();
          }}
        >
        {[...Array(3)].map(() => <span aria-hidden="true" />)}
        </button>
      </div>

      <div
        id="navbarItems"
        className={`navbar-menu ${isActive ? 'is-active' : ''}`}
      >
        <div className="navbar-start">
          <Link
            className="navbar-item"
            to="/#portfolio"
            onClick={() => {
              activateNavbarBurger();
            }}
          >
            <span className="icon">
              <BsFileCode />
            </span>
            <span> {t('portfolio')} </span>
          </Link>
          <Link
            className="navbar-item"
            to="/#skills"
            onClick={() => {
              activateNavbarBurger();
            }}
          >
            <span className="icon">
              <BsCode />
            </span>
            <span> {t('skills')} </span>
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-link">
              <span className="icon">
                <MdLanguage />
              </span>
              <span> {t('language')} </span>
            </div>
            <div className="navbar-dropdown">
              {languages.map(lng => (
                <button
                  type="button"
                  key={lng}
                  className="button is-fullwidth is-link has-text-black-bis is-inverted navbar-item"
                  onClick={e => {
                    activateNavbarBurger();
                    e.preventDefault();
                    changeLanguage(lng);
                  }}
                >
                  {t(lng)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
