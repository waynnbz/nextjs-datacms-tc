import { ButtonRecord } from 'lib/graphql';
import styles from './button.module.css';

export default function Button({
  link,
  title,
  style,
  onClick,
}: {
  link?: string;
  title: string;
  style: string;
  onClick?: () => void;
}) {
  return onClick ? (
    <button className={`${styles.button} ${style}`} onClick={onClick}>
      {title}
    </button>
  ) : (
    <a className={`${styles.button} ${style}`} href={link ?? '#'}>
      {title}
    </a>
  );
}
