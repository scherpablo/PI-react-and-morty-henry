// HOOKS
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
// COMPONENTES
import Nav from "./components/Nav/Nav.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
// VIEWS
import Login from "./views/Login.view.jsx";
import Home from "./views/Home.view.jsx";
import About from "./views/About.view.jsx";
import Detail from "./views/Detail.view.jsx";
import Favorites from "./views/Favorites.view.jsx";
import Error from "./views/Error.view.jsx";
//HELPERS
import PATHROUTES from "./helpers/PathRoutes.js";

const serverUrl = import.meta.env.VITE_SERVER_URL;
const loginUrl = import.meta.env.VITE_LOGIN_URL;

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const login = async (userData) => {
    const { email, password } = userData;

    try {
      const { data } = await axios(
        loginUrl + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(true);
      localStorage.setItem("isLoggedIn", "true");
      access && navigate(PATHROUTES.HOME);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    setAccess(false);
    localStorage.removeItem("isLoggedIn");
    navigate(PATHROUTES.LOGIN);
  };

  const onSearch = async (id) => {
    if (!/^\d+$/.test(id)) {
      window.alert("¡El ID debe ser un número válido!");
      return;
    }
    const numericId = parseInt(id, 10);
    if (numericId < 1 || numericId > 826) {
      window.alert("¡El ID debe estar entre 1 y 826!");
      return;
    }
    try {
      const { data } = await axios(`${serverUrl}/character/${numericId}`);
      if (data.name) {
        const isCharacterAdded = characters.some(
          (character) => character.id === data.id
        );
        if (isCharacterAdded) {
          window.alert("¡Este personaje ya está en la lista!");
        } else {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onRandomAdd = () => {
    const randomId = Math.floor(Math.random() * 826 + 1);
    onSearch(randomId);
  };

  const onClose = (id) => {
    setCharacters((prevCharacters) => {
      const updatedCharacters = prevCharacters.filter(
        (character) => character.id !== id
      );
      return updatedCharacters;
    });
  };

  const isLoginPage = pathname === PATHROUTES.LOGIN;
  const is404ErrorPage = pathname === PATHROUTES.ERROR;

  return (
    <div className="App">
      {access === true && !is404ErrorPage && !isLoginPage && (
        <Nav onSearch={onSearch} onRandomAdd={onRandomAdd} logout={logout} />
      )}
      <Routes>
        <Route path={PATHROUTES.LOGIN} element={<Login login={login} />} />
        <Route element={<ProtectedRoute canActivate={access} />}>
          <Route
            path={PATHROUTES.HOME}
            element={<Home characters={characters} onClose={onClose} />}
          />
          <Route exact path={PATHROUTES.ABOUT} element={<About />} />
          <Route path={PATHROUTES.DETAIL} element={<Detail />} />
          <Route path={PATHROUTES.FAVORITES} element={<Favorites />} />
        </Route>
        <Route path={PATHROUTES.ERROR} element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
