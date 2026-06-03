import ButtonDownload from '@/components/ui/ButtonDownload/ButtonDownload';
import styles from './Cta.module.css';

const ctaImg = '/images/ctaImg.png';

export default function Cta() {
  return (
    <section className={styles.section} id="baixar">
      <div className={styles.container}>
        <div className={styles.card}>

          {/* Mockup do iPhone — fica visível acima do card */}
          <div className={styles.phone} aria-hidden>
            <img src={ctaImg} alt="" className={styles.phoneImg} />
          </div>

          {/* Conteúdo */}
          <div className={styles.content}>
            <div className={styles.tag}>
              <span className={styles.tagDot} aria-hidden />
              <span className={`text-sm-medium ${styles.tagLabel}`}>Baixe o app</span>
            </div>

            <h2 className={`heading-md ${styles.heading}`}>
              Tenha a SSP-PI na sua mão
            </h2>

            <p className={`text-md-regular ${styles.description}`}>
              Baixe o Motorista Seguro, faça seu cadastro e rode com mais
              tranquilidade pelas estradas do Piauí. Totalmente gratuito.
            </p>

            <div>
              <ButtonDownload variant="playstore" color="light" href="#baixar" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
