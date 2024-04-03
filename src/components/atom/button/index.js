'use client'

// src/components/atom/button/Button.js
import React from 'react';
import styles from './style.css'; // Assuming you have this CSS module

const Button = ({ children, onClick }) => {
    return (
      <button
        type="button"
        className={styles.button} // Assuming you want to use CSS modules for styling
        onClick={onClick}
      >
        {children}
      </button>
    );
  };

export default Button;

