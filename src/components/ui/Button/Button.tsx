import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'stroke';
  disabled?: boolean;
  showIcon?: boolean;
  onClick?: () => void;
  className?: string;
}

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={styles.icon}
    >
      <path
        d="M8 10V2M11.3333 6.66667L8 10L4.66667 6.66667M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Button({
  children,
  href,
  variant = 'primary',
  disabled = false,
  showIcon = true,
  onClick,
  className: extraClassName,
}: ButtonProps) {
  const className = [
    styles.button,
    styles[variant],
    disabled ? styles.disabled : '',
    extraClassName,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {showIcon && <DownloadIcon />}
      <span>{children}</span>
    </>
  );

  if (href && !disabled) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}
