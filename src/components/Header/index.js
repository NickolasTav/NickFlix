import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <span>NickFlix</span>
      <nav>
        <a href="#">Home</a>
        <a href="#">Assitir</a>
      </nav>
    </header>
  );
}

export default Header;