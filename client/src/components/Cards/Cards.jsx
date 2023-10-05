import Card from "../Card/Card.jsx";
import styles from "./Cards.module.css"

const  Cards = (props) => {
  const { characters, onClose } = props; 

  return (
    <div className={styles.container}>
      {characters.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin}
          image={character.image}
          onClose={onClose}
          />
          ))}
    </div>
  );
}

export default Cards;
