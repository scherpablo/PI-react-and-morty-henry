import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import PATHROUTES from "../../helpers/PathRoutes";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch, onRandomAdd, logout }) => {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };
  
  const handleSearch = () => {
    onSearch(id);
    setId("");
  };
  
  
  return (
    <div className={styles.container}>
      <div className={styles.buttonsRow}>
        <Link to={PATHROUTES.FAVORITES}>
          <button className={styles.buttonLogout}>Favorites</button>
        </Link>
        <NavLink className={styles.link} to={PATHROUTES.ABOUT}>
          <button className={styles.buttonRandom}>About</button>
        </NavLink>
        <Link to={PATHROUTES.HOME}>
          <button className={styles.buttonAdd}>Home</button>
        </Link>
      </div>
      <div className={styles.inputRow}>
        <input
          type="search"
          className={styles.input}
          placeholder="🔍 id"
          value={id}
          onChange={handleChange}
        />
      </div>
      <div className={styles.buttonsRow}>
        <button onClick={handleSearch} className={styles.buttonAdd}>
          Search
        </button>
        <button onClick={onRandomAdd} className={styles.buttonRandom}>
          Random
        </button>
        <button onClick={logout} className={styles.buttonLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
