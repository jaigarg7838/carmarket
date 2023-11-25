// import Link from "next/link";
'use client'
 import React from "react";
// components/Navbar.js
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
        <div className="container ">
        <Link href="/" className="logo">
          CarMarket
        </Link>
        <button className={`menu-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <ul className={`menu ${isOpen ? 'open' : ''}`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#About">About</Link>
          </li>
          <li>
            <Link href="/#Footer">Contact</Link>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;

