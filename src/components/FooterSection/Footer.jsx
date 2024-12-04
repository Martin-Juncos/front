import styles from "./Footer.module.css";
import {
  IoLogoLinkedin,
  IoLogoOctocat,
  IoLogoFacebook,
  IoLogoInstagram,
} from "react-icons/io5";
function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.links}>
          <a href="">About</a>
          <a href="">Blog</a>
          <a href="">Contact</a>
        </div>
        <div className={styles.social}>
          <a
            href="https://www.linkedin.com/in/carlos-martin-juncos/"
            target="_blank"
          >
            <i>
              <IoLogoLinkedin />
            </i>
          </a>
          <a href="">
            <i>
              <IoLogoOctocat />
            </i>
          </a>
          <a href="">
            <i>
              <IoLogoFacebook />
            </i>
          </a>
          <a href="">
            <i>
              <IoLogoInstagram />
            </i>
          </a>
        </div>
        <div className={styles.copyright}>
          <p>© ByProfeMartin - All rigth reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
