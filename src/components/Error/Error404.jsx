import styles from "./Error404.module.css";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className={styles}>
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Error404;
