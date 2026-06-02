'use client';

import { useEffect, useState } from 'react';
import MenuItem from '@/components/ui/MenuItem/MenuItem';
import Button from '@/components/ui/Button/Button';
import styles from './Header.module.css';

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 6H20M4 12H20M4 18H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="/" className={styles.logo} aria-label="Motorista Seguro — página inicial">
          <img
            src="/images/logos/logo.svg"
            alt="Motorista Seguro"
            className={styles.logoImg}
          />
        </a>

        <nav className={styles.nav} aria-label="Navegação principal">
          <MenuItem label="Sobre" href="#sobre" />
          <MenuItem label="Como funciona" href="#como-funciona" />
          <MenuItem label="Dúvidas frequentes" href="#duvidas" />
        </nav>

        <div className={styles.actions}>
          <Button href="#baixar">Baixe o app</Button>
        </div>

        <button className={styles.menuButton} aria-label="Abrir menu">
          <MenuIcon />
        </button>
      </div>
    </header>
  );
}
