/* eslint-disable react/prop-types */
import Cards from "../components/Cards/Cards"

const HomeView = ({ characters, onClose }) => {
  return (
    <div>
        <Cards characters={characters} onClose={onClose} />
    </div>
  )
}

export default HomeView