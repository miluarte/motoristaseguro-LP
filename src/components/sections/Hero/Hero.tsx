import TagSection from '@/components/ui/TagSection/TagSection';
import ButtonDownload from '@/components/ui/ButtonDownload/ButtonDownload';
import Toast from '@/components/ui/Toast/Toast';
import PhoneHero from '@/components/ui/PhoneHero/PhoneHero';
import styles from './Hero.module.css';

function CheckCheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M1.5 8.5L5 12L10.5 5M5.5 8.5L9 12L14.5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const features = [
  'Gratuito e oficial',
  'Central ativa 24h',
  'Dados protegidos pela LGPD',
];

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Coluna esquerda — conteúdo */}
        <div className={styles.content}>
          <TagSection label="Aplicativo oficial da SSP-PI" />

          <h1 className={`heading-xl ${styles.heading}`}>
            Mais segurança<br />
            para quem vive na estrada
          </h1>

          <p className={`text-md-regular ${styles.description}`}>
            O Motorista Seguro é o canal direto entre motoristas profissionais
            do Piauí e a central de segurança da SSP-PI. Em uma situação de
            risco, três segundos pressionando o botão são suficientes para
            enviar sua localização, áudio e alerta às forças policiais.
          </p>

          <div className={styles.downloadButtons}>
            <ButtonDownload variant="playstore" color="dark" href="#baixar" />
          </div>

          <ul className={styles.features}>
            {features.map((feature) => (
              <li key={feature} className={`text-sm-regular ${styles.featureItem}`}>
                <span className={styles.featureIcon}>
                  <CheckCheckIcon />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className={styles.toastsMobile}>
            <Toast title="Alerta recebido" subtitle="Central SSP-PI · 4s" variant="success" />
            <Toast title="Localização viva" subtitle="Atualiza a cada 3s" variant="brand" />
          </div>
        </div>

        {/* Coluna direita — imagem do app */}
        <div className={styles.imageWrapper}>
          <PhoneHero />
          <div className={styles.toastAlert}>
            <Toast title="Alerta recebido" subtitle="Central SSP-PI · 4s" variant="success" />
          </div>
          <div className={styles.toastLocation}>
            <Toast title="Localização viva" subtitle="Atualiza a cada 3s" variant="brand" />
          </div>
        </div>

      </div>
    </section>
  );
}
