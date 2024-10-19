import React from 'react';
import styles from './Header.module.css';
import { useMenuOpen } from '../hooks/useMenuOpen.tsx';

const Header = () => {
  const { toggleMenuOpen } = useMenuOpen();
  return (
    <header className={styles.header}>
      <span className={styles.title}>🚀 Rocket Journal</span>

      <div className={styles.notebooksMenu}>
        <button onClick={() => { toggleMenuOpen(); }}>All Notebooks</button>
      </div>
    </header>
  );
};

export default Header;
