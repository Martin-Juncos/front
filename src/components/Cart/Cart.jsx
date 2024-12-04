import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../../redux/cartSlice";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const publicApi = import.meta.env.VITE_PUBLIC_API;

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
initMercadoPago(publicApi);

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [preferenceId, setPreferenceId] = useState(null);

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "https://back-2gtt.onrender.com/create_preference",
        cart
      );
      const { id } = response.data;
      return id;
    } catch (error) {
      console.error(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    id && setPreferenceId(id);
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Calcular el subtotal y el total
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const total = subtotal; // Aquí podrías añadir impuestos u otros cargos si fuera necesario

  return (
    <div className={styles.cart}>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <table className={styles.cartTable}>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                      className={styles.quantityInput}
                    />
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button onClick={() => handleRemove(item.id)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.cartSummary}>
            <h3>Resumen del Carrito</h3>
            <p>Total: ${total.toFixed(2)}</p>
            <Link to="/">
              <button>Segir comprando</button>
            </Link>
            <button onClick={handleClearCart}>Vaciar Carrito</button>
          </div>
          <div>
            <button onClick={handleBuy} className={styles.buyButton}>
              Pagar
            </button>
            {preferenceId && (
              <Wallet
                initialization={{
                  preferenceId: preferenceId,
                  redirectMode: "blank",
                }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
