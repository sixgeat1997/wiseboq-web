import axios from "axios";
export const getPromotions = async () => {
  const res = await axios.get("https://pokeapi.co/api/v2/pokemon/");
  return res.data;
};
