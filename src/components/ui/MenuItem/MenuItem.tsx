import styles from './MenuItem.module.css';

interface MenuItemProps {
  label: string;
  href?: string;
  variant?: 'default' | 'anchor';
  onClick?: () => void;
}

export default function MenuItem({
  label,
  href,
  variant = 'default',
  onClick,
}: MenuItemProps) {
  const className = [styles.item, styles[variant]].join(' ');

  if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {label}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}
