import ButtonDownload from '@/components/ui/ButtonDownload/ButtonDownload';
import styles from './Cta.module.css';

// TODO: mover para public/images/cta/ quando os assets finais estiverem prontos
const bgDecoration = 'https://www.figma.com/api/mcp/asset/46c160d2-3c14-4518-b75f-4e419958ef76';
const phoneFrame1 = 'https://www.figma.com/api/mcp/asset/7c06e605-98c8-48ae-87b1-13bfb57022fe';
const phoneFrame2 = 'https://www.figma.com/api/mcp/asset/6685dfae-0394-4fff-895b-31168f61965c';
const phoneScreen = 'https://www.figma.com/api/mcp/asset/67f77828-ca0f-4bda-b7f4-c21c004846f8';

export default function Cta() {
  return (
    <section className={styles.section} id="baixar">
      <div className={styles.container}>
        <div className={styles.card}>

          {/* Decoração de fundo */}
          <div className={styles.bgDecoration} aria-hidden>
            <img src={bgDecoration} alt="" className={styles.bgDecorationImg} />
          </div>

          {/* Mockup do iPhone — fica visível acima do card */}
          <div className={styles.phone} aria-hidden>
            <div className={styles.phoneInner}>
              <img src={phoneFrame1} alt="" className={styles.phoneFrame} />
              <img src={phoneFrame2} alt="" className={styles.phoneFrame} />
            </div>
            <div className={styles.phoneScreen}>
              <img src={phoneScreen} alt="" className={styles.phoneScreenImg} />
            </div>
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
