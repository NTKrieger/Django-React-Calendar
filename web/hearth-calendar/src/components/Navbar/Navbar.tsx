import styles from './Navbar.module.css';

interface NavbarProps {
  children: JSX.Element | JSX.Element[] | null;
  month: string;
}

export default function Navbar({children, month}:NavbarProps):JSX.Element {
  return (
    <div className={styles.outline}>
      <div className={styles.title}>{month}</div>
    </div>
  );
}