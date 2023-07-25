import axios from "axios";
import { API_URL } from "../constants/constant";

//this is to get the all recipes with a ingridient name
export const getRecipes = async (searchedQuery) => {
  try {
    let response = await axios.get(`${API_URL}/search?q=${searchedQuery}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling the api ", error.message);
    return error.response;
  }
};

//this is to get a particular recipe details
export const getRecipe = async (searchedQuery) => {
  try {
    let response = await axios.get(`${API_URL}/get?rId=${searchedQuery}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling the api ", error.message);
    return error.response;
  }
};
