import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to='/'>Guitar Shop</NavLink>
      <NavLink to='/article'>Article</NavLink>
    </header>
  );
};

export default Header;
