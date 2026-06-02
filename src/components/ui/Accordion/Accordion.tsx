'use client';

import { useState } from 'react';
import styles from './Accordion.module.css';

interface AccordionProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

function PlusIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}


export default function Accordion({ question, answer, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`${styles.accordion} ${isOpen ? styles.open : ''}`}>
      <button
        className={styles.trigger}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span className={styles.question}>{question}</span>
        <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>
          <PlusIcon />
        </span>
      </button>

      <div className={styles.answerWrapper} aria-hidden={!isOpen}>
        <p className={styles.answer}>{answer}</p>
      </div>
    </div>
  );
}
