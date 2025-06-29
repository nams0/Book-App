import styles from "./Layout.module.css"
function Layout({ children }) {
  return (
    <>
      <header style={styles.header}>
        <h1>Book App</h1>
        <p>
          <a href="https://github.com/nams0">Nams0</a> | React.js
        </p>
      </header>
      {children}
      <footer style={styles.footer}>
        <p>Developed by Amirhossein with ❤️</p>
      </footer>
    </>
  )
}

export default Layout
