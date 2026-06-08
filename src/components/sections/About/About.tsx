import TagSection from '@/components/ui/TagSection/TagSection';
import styles from './About.module.css';

const screenA = '/images/aboutPhone01.png';
const screenB = '/images/aboutPhone02.png';
const screenC = '/images/aboutPhone03.png';

function PhoneMockup({ screen }: { screen: string }) {
  return (
    <div className={styles.phoneWrapper}>
      <img src={screen} alt="" className={styles.phoneScreenImg} />
    </div>
  );
}

export default function About() {
  return (
    <section className={styles.section} id="sobre">
      <div className={styles.container}>

        <div className={styles.header}>
          <TagSection label="Sobre o Motorista Seguro" />
          <h2 className={`heading-lg ${styles.heading}`}>
            Um botão, SSP-PI ao seu lado
          </h2>
          <p className={`text-md-regular ${styles.description}`}>
            O Motorista Seguro é uma{' '}
            <strong>ferramenta gratuita</strong>
            {' '}para{' '}
            <strong>
              profissionais como motoristas de aplicativo, taxistas,
              entregadores e mototaxistas
            </strong>
            {' '}que rodam pelas ruas e estradas do estado.
          </p>
        </div>

        <div className={styles.cards}>

          <div className={styles.card}>
            <div className={styles.cardText}>
              <p className={`text-md-bold ${styles.cardTitle}`}>Localização em tempo real</p>
              <p className={`text-md-regular ${styles.cardDescription}`}>
                GPS preciso transmitido à central durante o alerta
              </p>
            </div>
            <PhoneMockup screen={screenA} />
            <div className={`${styles.gradient} ${styles.gradientBottom}`} aria-hidden />
          </div>

          <div className={`${styles.card} ${styles.cardReverse}`}>
            <PhoneMockup screen={screenB} />
            <div className={`${styles.gradient} ${styles.gradientTop}`} aria-hidden />
            <div className={styles.cardText}>
              <p className={`text-md-bold ${styles.cardTitle}`}>Acionamento rápido</p>
              <p className={`text-md-regular ${styles.cardDescription}`}>
                Botão flutuante acessível em qualquer tela do celular
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardText}>
              <p className={`text-md-bold ${styles.cardTitle}`}>Cancelamento com biometria</p>
              <p className={`text-md-regular ${styles.cardDescription}`}>
                Acionou por engano? Cancele com Face ID, digital ou PIN.
                Alertas falsos não chegam à central.
              </p>
            </div>
            <PhoneMockup screen={screenC} />
            <div className={`${styles.gradient} ${styles.gradientBottom}`} aria-hidden />
          </div>

        </div>

      </div>
    </section>
  );
}
