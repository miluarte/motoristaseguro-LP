import styles from "./Tracks.module.css";

interface TracksProps {
  fixed?: boolean;
}

export default function Tracks({ fixed = false }: TracksProps) {
  return (
    <div className={`${styles.tracks} ${fixed ? styles.fixed : ''}`} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}
