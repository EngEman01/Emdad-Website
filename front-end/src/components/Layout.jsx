import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

export default function Layout({ language, toggleLanguage }) { // Accept props here
  return (
    <>
      <Navbar language={language} toggleLanguage={toggleLanguage} /> {/* Use passed props */}
      <Outlet />
    </>
  );
}