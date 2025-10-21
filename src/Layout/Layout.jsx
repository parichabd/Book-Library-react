import styles from "./Layout.module.css";
function Layout({ children }) {
  return (
    <>
      <header>
        <div className={styles.header}>
          <h1 className={styles.head}>Book App</h1>
          <p className={styles.link}>
            <a href="#">Bootostart</a> | React.js Full Course{" "}
          </p>
        </div>
      </header>
      {children}
      <footer>
        <p className={styles.footrerParagraph}>Developed with Love</p>
      </footer>
    </>
  );
}

export default Layout;
