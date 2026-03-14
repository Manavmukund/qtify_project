
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search placeholder="Search a album of your choice" />
      <Button text="Give Feedback" />
    </nav>
  );
}

export default Navbar;