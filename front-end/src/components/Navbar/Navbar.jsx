import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styleNavbar from "./Navbar.module.css";

export default function Navbar({ language, toggleLanguage }) {

  const [isNavbarDownVisible, setIsNavbarDownVisible] = useState(false);


  const toggleNavbarDown = () => {
      setIsNavbarDownVisible(prevState => !prevState);
  }

  // Content for Arabic
  const arabicContent = {
    home: "الصفحة الرئيسية",
    about: "اعرف عنا",
    products: "المنتجات",
    contact: "تواصل معنا",
    toggleButton: "☰"
  };

  // Content for English
  const englishContent = {
    home: "Home",
    about: "About Us",
    products: "Products",
    contact: "Contact Us",
    toggleButton: "☰"
  };

  // Choose the content based on the selected language
  const content = language === "ar" ? arabicContent : englishContent;

  return (
    <div className={styleNavbar.navbarStyle}>
      <div className={styleNavbar.logo}>
        <img
          className={styleNavbar.imgLogo}
          src="/images/emdadLogo.png"
          alt="Logo"
        />
      </div>

      <div className={styleNavbar.links}>
        <a className={styleNavbar.elementLink} href="">
          {content.home}
        </a>
        <a className={styleNavbar.elementLink} href="">
          {content.about}
        </a>
        <a className={styleNavbar.elementLink} href="">
          {content.products}
        </a>
        <a className={styleNavbar.elementLink} href="">
          {content.contact}
        </a>
      </div>

      <div className={styleNavbar.linksDown}>
        <button
          className={styleNavbar.navToggle}
          aria-label="Toggle Menu"
          onClick={toggleNavbarDown}
        >
          {content.toggleButton}
        </button>
        {isNavbarDownVisible && (
                            <div className={styleNavbar.navbarDown}>
                                <Link to={'/'} className={styleNavbar.elementLinkDown}> {content.home}</Link>
                                <Link to={'/product'} className={styleNavbar.elementLinkDown}>{content.about}</Link>
                                <Link to={'/about'} className={styleNavbar.elementLinkDown}>{content.products}</Link>
                                <Link to={'/contact'} className={styleNavbar.elementLinkDown}> {content.contact}</Link>
                            </div>
                        )}
      </div>

      {/* Language toggle button */}
      <button
        className={styleNavbar.languageButton}
        onClick={toggleLanguage}
      >
        {language === "ar" ? "تغيير اللغة" : "Change Language"}
      </button>
    </div>
  );
}
