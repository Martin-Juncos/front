import { AiOutlineClear } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Sidebar.module.css";
import {
  filterByCategory,
  searchProducts,
  sortProducts,
  updateProductsCopy,
} from "../../redux/productsSlice";
import { useState } from "react";

function Sidebar() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.allProducts);

  const [searchText, setSearchText] = useState("");

  const categories = Array.from(
    new Set(allProducts.map((product) => product.category))
  );

  const handleSort = (e) => {
    dispatch(sortProducts(e.target.value));
  };
  const categoryList = [];
  const handleFilter = (e) => {
    categoryList.push(e.target.value);
    dispatch(filterByCategory(categoryList));
  };

  const handleClear = () => {
    dispatch(updateProductsCopy(allProducts));
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    dispatch(searchProducts(e.target.value));
  };

  return (
    <div className={styles.sidebar}>
      <h3>SideBar</h3>
      <button onClick={handleClear}>
        <AiOutlineClear />
      </button>
      <h4>Ordenamiento</h4>
      <select onChange={handleSort}>
        <option value="asc">Menor a Mayor</option>
        <option value="desc">Mayor a Menor</option>
      </select>
      <h4>Filtro</h4>
      <select onChange={handleFilter}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <input
        onChange={handleSearch}
        type="text"
        value={searchText}
        placeholder="Search..."
      />
    </div>
  );
}

export default Sidebar;
