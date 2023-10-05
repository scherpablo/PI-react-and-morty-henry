import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import Card from "../Card/Card";
import styles from "./Favorites.module.css";

const Favorites = (props) => {
  const { myFavorites } = props;
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerSelects}>
        <select className={styles.select} onChange={handleOrder}>
          <option className={styles.option} value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select className={styles.select} onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className={styles.containerCards}>
        {myFavorites.map((character) => (
          <Card key={character.id} {...character} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);
