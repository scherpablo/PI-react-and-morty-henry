import axios from "axios";
import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  ORDER,
  GET_CHARACTER_DETAIL,
} from "./actionsTypes";

const baseUrl = import.meta.env.VITE_BASE_URL;
const favUrl = import.meta.env.VITE_FAV_URL;

const addFav = (character) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(favUrl, character);
      dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const removeFav = (id) => {
  const endpoint = favUrl + "/" + id;

  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

const getCharacterDetail = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios(`${baseUrl}/character/${id}`);
      dispatch({
        type: GET_CHARACTER_DETAIL,
        payload: response.data,
      });
    } catch (error) {
      console.log("Error al obtener detalles del personaje:", error);
    }
  };
};

export { addFav, removeFav, filterCards, orderCards, getCharacterDetail };
