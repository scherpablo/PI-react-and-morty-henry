import { useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
import PATHROUTES from "../../helpers/PathRoutes.js";

const Nav = ({ onSearch, onRandomAdd, logout }) => {
  const { pathname } = useLocation();
  
  const is404ErrorPAge = pathname === PATHROUTES.ERROR;

  return (
    <div>
      {!is404ErrorPAge && (
        <SearchBar
          onSearch={onSearch}
          onRandomAdd={onRandomAdd}
          logout={logout}
        />
      )}
    </div>
  );
};

export default Nav;
