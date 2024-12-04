// Home.jsx
import ProductList from "../ProductList/ProductList";
import styles from "./Home.module.css";
function Home() {
  return (
    <div className={styles}>
      <ProductList />
    </div>
  );
}

export default Home;
