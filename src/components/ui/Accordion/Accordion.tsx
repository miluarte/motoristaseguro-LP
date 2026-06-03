import styles from "./Accordion.module.css";

interface AccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function PlusIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Accordion({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionProps) {
  return (
    <div className={`${styles.accordion} ${isOpen ? styles.open : ""}`}>
      <button
        className={styles.trigger}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={styles.question}>{question}</span>
        <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}>
          <PlusIcon />
        </span>
      </button>

      <div className={styles.answerWrapper} aria-hidden={!isOpen}>
        <div className={styles.answerInner}>
          <p className={styles.answer}>{answer}</p>
        </div>
      </div>
    </div>
  );
}