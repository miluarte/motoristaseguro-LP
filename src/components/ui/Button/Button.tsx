import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'default',
  onClick,
}: ButtonProps) {
  const className = [
    styles.button,
    styles[variant],
    styles[size],
  ].join(' ');

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
