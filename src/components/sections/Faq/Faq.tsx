import TagSection from '@/components/ui/TagSection/TagSection';
import Accordion from '@/components/ui/Accordion/Accordion';
import styles from './Faq.module.css';

const faqs = [
  {
    question: 'O aplicativo tem algum custo?',
    answer:
      'Não. O Motorista Seguro é totalmente gratuito, desenvolvido e mantido pela Secretaria de Segurança Pública do Piauí.',
    defaultOpen: true,
  },
  {
    question: 'Posso utilizar o aplicativo offline?',
    answer:
      'Para acionar a central é necessário conexão com a internet, pois o app precisa enviar sua localização e áudio em tempo real. Recomendamos manter dados móveis ativados durante as viagens.',
  },
  {
    question: 'E se eu acionar por engano?',
    answer:
      'Cancele o alerta com autenticação biométrica diretamente no aplicativo. O cancelamento deve ser feito rapidamente para evitar o despacho de viaturas desnecessariamente.',
  },
  {
    question: 'Quanto tempo leva para o cadastro ser aprovado?',
    answer:
      'Após o envio da documentação, o cadastro é analisado pela equipe da SSP-PI em até 48 horas úteis. Você receberá uma notificação quando o acesso for liberado.',
  },
  {
    question: 'Quais são as funcionalidades principais do aplicativo?',
    answer:
      'O app oferece botão de pânico com envio de localização e áudio, monitoramento em tempo real pela central da SSP-PI, histórico de acionamentos e atualização de cadastro.',
  },
];

export default function Faq() {
  return (
    <section className={styles.section} id="duvidas">
      <div className={styles.container}>

        <div className={styles.header}>
          <TagSection label="Dúvidas Frequentes" />
          <h2 className={`heading-md ${styles.heading}`}>
            Antes de baixar, tire suas dúvidas
          </h2>
        </div>

        <div className={styles.accordions}>
          {faqs.map((faq) => (
            <Accordion
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              defaultOpen={faq.defaultOpen}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
