import TagSection from '@/components/ui/TagSection/TagSection';
import styles from './About.module.css';

// TODO: mover para public/images/about/ quando os assets finais estiverem prontos
const phoneFrame = 'https://www.figma.com/api/mcp/asset/3592a8a1-1665-4727-95dc-dc3e6f7d7ebd';
const phoneFrameLayer = 'https://www.figma.com/api/mcp/asset/36ec4ecf-1997-48cd-98a7-7e0d89072217';
const screenA = 'https://www.figma.com/api/mcp/asset/a4e53a04-1e10-48a6-ba10-72836a3fe7c9';
const screenB = 'https://www.figma.com/api/mcp/asset/488dbd8f-57de-4e9f-b410-676a8c33f900';

function PhoneMockup({ screen }: { screen: string }) {
  return (
    <div className={styles.phoneWrapper}>
      <div className={styles.phoneFrameLayer} aria-hidden>
        <img src={phoneFrame} alt="" className={styles.phoneFrame} />
        <img src={phoneFrameLayer} alt="" className={styles.phoneFrame} />
      </div>
      <div className={styles.phoneScreen}>
        <img src={screen} alt="" className={styles.phoneScreenImg} />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className={styles.section} id="sobre">
      <div className={styles.container}>

        <div className={styles.header}>
          <TagSection label="Sobre o Motorista Seguro" />
          <h2 className={`heading-md ${styles.heading}`}>
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

          {/* Card 1 — texto no topo, phone na base */}
          <div className={styles.card}>
            <div className={styles.cardText}>
              <p className={`text-md-bold ${styles.cardTitle}`}>Acionamento rápido</p>
              <p className={`text-md-regular ${styles.cardDescription}`}>
                Botão flutuante acessível em qualquer tela do celular
              </p>
            </div>
            <PhoneMockup screen={screenA} />
            <div className={`${styles.gradient} ${styles.gradientBottom}`} aria-hidden />
          </div>

          {/* Card 2 — phone no topo, texto na base */}
          <div className={`${styles.card} ${styles.cardReverse}`}>
            <PhoneMockup screen={screenB} />
            <div className={`${styles.gradient} ${styles.gradientTop}`} aria-hidden />
            <div className={styles.cardText}>
              <p className={`text-md-bold ${styles.cardTitle}`}>Localização em tempo real</p>
              <p className={`text-md-regular ${styles.cardDescription}`}>
                GPS preciso transmitido à central durante o alerta
              </p>
            </div>
          </div>

          {/* Card 3 — texto no topo, phone na base */}
          <div className={styles.card}>
            <div className={styles.cardText}>
              <p className={`text-md-bold ${styles.cardTitle}`}>Cancelamento com biometria</p>
              <p className={`text-md-regular ${styles.cardDescription}`}>
                Acionou por engano? Cancele com Face ID, digital ou PIN.
                Alertas falsos não chegam à central.
              </p>
            </div>
            <PhoneMockup screen={screenB} />
            <div className={`${styles.gradient} ${styles.gradientBottom}`} aria-hidden />
          </div>

        </div>

      </div>
    </section>
  );
}
