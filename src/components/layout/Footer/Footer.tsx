import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          &copy; {new Date().getFullYear()} Motorista Seguro. Programa Governamental.
        </p>
      </div>
    </footer>
  );
}
