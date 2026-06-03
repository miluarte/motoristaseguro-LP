import Image from 'next/image';
import styles from './PhoneHero.module.css';

export default function PhoneHero() {
  return (
    <div className={styles.wrapper}>
      {/* Decoração de fundo — gradiente + anéis */}
      <div className={styles.bgCircle} aria-hidden="true">
        <div className={styles.ring1} />
        <div className={styles.ring2} />
      </div>

      {/* Mockup do celular */}
      <div className={styles.phone}>
        <Image
          src="/images/phoneHero.png"
          alt="Tela inicial do app Motorista Seguro"
          fill
          className={styles.phoneImg}
          sizes="322px"
          priority
        />
      </div>
    </div>
  );
}
