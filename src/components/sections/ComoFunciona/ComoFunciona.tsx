import Image from 'next/image';
import TagSection from '@/components/ui/TagSection/TagSection';
import styles from './ComoFunciona.module.css';

const cards = [
  {
    title: 'Motorista aciona o alerta',
    description:
      'Pressionando o botão flutuante ou o botão principal por 3 segundos, o app envia localização e áudio à central.',
    image: '/images/howWorks03.png',
    imageAlt: 'Motorista dentro do carro acionando o app',
  },
  {
    title: 'Central da SSP-PI verifica',
    description:
      'Operadores credenciados recebem os dados, confirmam o motorista pelo cadastro e classificam a ocorrência.',
    image: '/images/howWorks02.png',
    imageAlt: 'Operadores na central verificando o alerta',
  },
  {
    title: 'Equipe é despachada',
    description:
      'A viatura mais próxima é direcionada à localização em tempo real até o motorista cancelar com biometria.',
    image: '/images/howWorks01.png',
    imageAlt: 'Viatura policial sendo despachada',
  },
];

export default function ComoFunciona() {
  return (
    <section className={styles.section} id="como-funciona">
      <div className={styles.container}>

        {/* Coluna esquerda — sticky */}
        <div className={styles.sectionHeader}>
          <TagSection label="Como funciona" />
          <h2 className={`heading-lg ${styles.heading}`}>
            Do toque no botão<br />
            à chegada da viatura
          </h2>
          <p className={`text-md-regular ${styles.description}`}>
            Três etapas conectadas e monitoradas pela central operacional
            da SSP-PI, 24 horas por dia.
          </p>
        </div>

        {/* Coluna direita — cards empilháveis */}
        <div className={styles.cards}>
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={styles.card}
              style={{ zIndex: i + 1 }}
            >
              <div className={styles.cardText}>
                <h3 className={`text-md-bold ${styles.cardTitle}`}>{card.title}</h3>
                <p className={`text-md-regular ${styles.cardDescription}`}>{card.description}</p>
              </div>
              <div className={styles.cardImageWrapper}>
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
