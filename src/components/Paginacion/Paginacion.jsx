// Paginacion.jsx
import styles from "./Paginacion.module.css";
/* eslint-disable react/prop-types */
function Paginacion({
  productosPorPagina,
  paginaActual,
  setPaginaActual,
  totalDeProductos,
}) {
  const cantidadDePaginas = Math.ceil(totalDeProductos / productosPorPagina);
  const numeroDePagina = [];
  for (let i = 0; i < cantidadDePaginas; i++) {
    numeroDePagina.push(i + 1);
  }

  const paginaAnterior = () => {
    setPaginaActual(paginaActual - 1);
  };
  const paginaSiguiente = () => {
    setPaginaActual(paginaActual + 1);
  };
  const numeroActual = (num) => {
    setPaginaActual(num);
  };
  return (
    <div className={styles.button}>
      {paginaActual <= 1 ? null : (
        <button onClick={paginaAnterior}>Prev</button>
      )}
      {numeroDePagina.map((num) => (
        <button
          className={num === paginaActual ? styles.currPage : null}
          onClick={() => numeroActual(num)}
          key={num}
        >
          {num}
        </button>
      ))}
      {paginaActual >= cantidadDePaginas ? null : (
        <button onClick={paginaSiguiente}>Next</button>
      )}
    </div>
  );
}

export default Paginacion;
