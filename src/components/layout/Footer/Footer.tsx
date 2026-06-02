import MenuItem from '@/components/ui/MenuItem/MenuItem';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Main grid: brand + nav */}
        <div className={styles.main}>

          {/* Brand column */}
          <div className={styles.brand}>
            <a href="/" aria-label="Motorista Seguro — página inicial">
              <img
                src="/images/logos/logo.svg"
                alt="Motorista Seguro"
                className={styles.logo}
              />
            </a>
            <p className={styles.description}>
              Iniciativa da Secretaria de Segurança Pública do Piauí para
              motoristas profissionais. Em emergência sem cobertura, ligue{' '}
              <span className={styles.emergencyNumber}>190.</span>
            </p>
          </div>

          {/* Nav columns */}
          <div className={styles.navColumns}>
            <div className={styles.navColumn}>
              <h3 className={styles.navTitle}>Mapa do Site</h3>
              <MenuItem variant="anchor" label="Sobre" href="#sobre" />
              <MenuItem variant="anchor" label="Como funciona" href="#como-funciona" />
              <MenuItem variant="anchor" label="Dúvidas frequentes" href="#duvidas" />
              <MenuItem variant="anchor" label="Baixe Agora — Android" href="#baixar" />
            </div>

            <div className={styles.navColumn}>
              <h3 className={styles.navTitle}>Institucional</h3>
              <MenuItem variant="anchor" label="Política de privacidade" href="#privacidade" />
              <MenuItem variant="anchor" label="Termos de Uso" href="#termos" />
              <MenuItem variant="anchor" label="LGPD" href="#lgpd" />
              <MenuItem variant="anchor" label="Acessibilidade" href="#acessibilidade" />
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2026 Governo do Estado do Piauí · SSP-PI
          </p>
          <div className={styles.contacts}>
            <span className={styles.contactItem}>
              Emergência <strong>190</strong>
            </span>
            <span className={styles.contactItem}>
              Bombeiros <strong>193</strong>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
