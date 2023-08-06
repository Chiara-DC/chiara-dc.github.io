import navstyle from "../styles/components/Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav>
        <a className={navstyle.title} href="/">
          Chiara DC
        </a>
        <a className={navstyle.text} href="/">
          About
        </a>

        <a className={navstyle.text} href="/photography">
          Photography
        </a>

        <a className={navstyle.text} href="/">
          Contact
        </a>
      </nav>
    </>
  );
}
