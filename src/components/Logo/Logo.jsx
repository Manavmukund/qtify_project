import logo from "../../assets/Logo.png";
import styles from "./Logo.module.css";

function Logo() {
  return <img src={logo} alt="QTify Logo" className={styles.logo} />;
}

export default Logo;