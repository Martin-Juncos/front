// Navbar.jsx
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import LoginButton from "../Autho/LoginButton/LoginButton";
import LogoutButton from "../Autho/LogoutButton/LogoutButton";
import styles from "./Navbar.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";

function Navbar() {
  const { user, isAuthenticated } = useAuth0();

  const cart = useSelector((state) => state.cart);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className={styles.navbar}>
      <div className={styles["nav-items"]}>
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/contacto">Contacto</Link>
        <Link className={styles.cartLink} to="/cart">
          <FaCartShopping />
          {cartItemCount > 0 && (
            <span className={styles.cartCount}>{cartItemCount}</span>
          )}
        </Link>
      </div>
      <div className={styles["auth-section"]}>
        {isAuthenticated ? (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {`Hola ${user.given_name}`}
            <img
              src={user.picture}
              alt={user.name}
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
            />
            <LogoutButton />
          </div>
        ) : (
          <LoginButton />
        )}
      </div>
    </div>
  );
}

export default Navbar;
