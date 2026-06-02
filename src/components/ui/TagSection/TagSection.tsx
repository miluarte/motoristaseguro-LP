import styles from './TagSection.module.css';

interface TagSectionProps {
  label: string;
}

export default function TagSection({ label }: TagSectionProps) {
  return (
    <div className={styles.tag}>
      <img
        src="/images/icons/dot.svg"
        alt=""
        aria-hidden="true"
        width={6}
        height={6}
        className={styles.dot}
      />
      <span className={styles.label}>{label}</span>
    </div>
  );
}
