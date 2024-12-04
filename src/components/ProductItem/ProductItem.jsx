// ProductItem.jsx
import { useDispatch } from "react-redux";
import styles from "./ProductItem.module.css";
import { FaCartArrowDown } from "react-icons/fa";
import { addToCart } from "../../redux/cartSlice";
/* eslint-disable react/prop-types */
function ProductItem({ id, image, title, price }) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ id, image, title, price }));
  };
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={title} />
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.price}>$ {price}</p>
      <button onClick={handleAddToCart} className={styles.addButton}>
        <FaCartArrowDown />
      </button>
    </div>
  );
}

export default ProductItem;
