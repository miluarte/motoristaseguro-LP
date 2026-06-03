'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
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

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
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

          <button
            className={styles.menuButton}
            aria-label="Abrir menu"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      {mounted && createPortal(
        <>
          {/* Overlay */}
          <div
            className={`${styles.drawerOverlay} ${drawerOpen ? styles.drawerOverlayOpen : ''}`}
            onClick={closeDrawer}
            aria-hidden="true"
          />

          {/* Drawer */}
          <div
            className={`${styles.drawer} ${drawerOpen ? styles.drawerPanelOpen : ''}`}
            role="dialog"
            aria-label="Menu de navegação"
            aria-modal="true"
          >
            <div className={styles.drawerHeader}>
              <a href="/" className={styles.logo} onClick={closeDrawer} aria-label="Motorista Seguro — página inicial">
                <img
                  src="/images/logos/logo.svg"
                  alt="Motorista Seguro"
                  className={styles.logoImg}
                />
              </a>
              <button
                className={styles.drawerClose}
                aria-label="Fechar menu"
                onClick={closeDrawer}
              >
                <CloseIcon />
              </button>
            </div>

            <nav className={styles.drawerNav} aria-label="Navegação">
              <MenuItem label="Sobre" href="#sobre" onClick={closeDrawer} className={styles.drawerItem} />
              <MenuItem label="Como funciona" href="#como-funciona" onClick={closeDrawer} className={styles.drawerItem} />
              <MenuItem label="Dúvidas frequentes" href="#duvidas" onClick={closeDrawer} className={styles.drawerItem} />
            </nav>

            <Button href="#baixar" onClick={closeDrawer} className={styles.drawerCta}>
              Baixe o app
            </Button>
          </div>
        </>,
        document.body
      )}
    </>
  );
}
