import styles from './Toast.module.css';

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M3.75 9.75L7.5 13.5L14.25 5.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M9 1.5C6.515 1.5 4.5 3.515 4.5 6C4.5 9.375 9 16.5 9 16.5C9 16.5 13.5 9.375 13.5 6C13.5 3.515 11.485 1.5 9 1.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="6" r="1.875" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

type ToastVariant = 'success' | 'brand';

interface ToastProps {
  title: string;
  subtitle: string;
  variant?: ToastVariant;
}

export default function Toast({ title, subtitle, variant = 'success' }: ToastProps) {
  return (
    <div className={styles.toast}>
      <div className={`${styles.iconWrapper} ${styles[`iconWrapper--${variant}`]}`}>
        {variant === 'success' ? <CheckIcon /> : <LocationIcon />}
      </div>
      <div className={styles.content}>
        <span className={`text-sm-medium ${styles.title}`}>{title}</span>
        <span className={`text-sm-regular ${styles.subtitle}`}>{subtitle}</span>
      </div>
    </div>
  );
}
