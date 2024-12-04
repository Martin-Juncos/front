// ProductList.jsx
import styles from "./ProductList.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllProducts } from "../../redux/productsSlice";
import ProductItem from "../ProductItem/ProductItem";
import Paginacion from "../Paginacion/Paginacion";

function ProductList() {
  const { productsCopy } = useSelector((state) => state.products);
  const productosPorPagina = 6;
  const [paginaActual, setPaginaActual] = useState(1);
  const totalDeProductos = productsCopy.length;

  const ultimoIndice = productosPorPagina * paginaActual;
  const primerIndice = ultimoIndice - productosPorPagina;

  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://back-2gtt.onrender.com/api/products")
      .then((res) => dispatch(setAllProducts(res.data)))
      .catch((err) => console.error(err));
  }, [dispatch]);

  return (
    <div className={styles.productList}>
      <div className={styles.container}>
        {productsCopy.slice(primerIndice, ultimoIndice).map((product) => (
          <ProductItem
            key={product._id}
            id={product._id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
      <Paginacion
        productosPorPagina={productosPorPagina}
        paginaActual={paginaActual}
        setPaginaActual={setPaginaActual}
        totalDeProductos={totalDeProductos}
      />
    </div>
  );
}

export default ProductList;
