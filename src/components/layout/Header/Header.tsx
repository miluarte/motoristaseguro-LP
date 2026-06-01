import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoText}>Motorista Seguro</span>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><a href="#sobre" className={styles.navLink}>Sobre</a></li>
            <li><a href="#beneficios" className={styles.navLink}>Benefícios</a></li>
            <li><a href="#inscricao" className={styles.navLink}>Inscrição</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
