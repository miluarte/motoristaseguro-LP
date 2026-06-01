import Button from '@/components/ui/Button/Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>Programa Governamental</span>
          <h1 className={styles.title}>
            Sua segurança no trânsito é nossa prioridade
          </h1>
          <p className={styles.description}>
            O Motorista Seguro é um programa dedicado a promover a educação no
            trânsito e garantir mais segurança para todos os condutores brasileiros.
          </p>
          <div className={styles.actions}>
            <Button href="#inscricao" variant="primary">Quero participar</Button>
            <Button href="#sobre" variant="secondary">Saiba mais</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
