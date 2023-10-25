import axios from "axios";

//GET HTTP request to fetch product data
let getProducts = () => {
  const config = {
    method: "GET",
    url: "https://fakestoreapi.com/products",
    contentType: "application/json",
  };
  return axios(config);
};

const productsOfferedService = {
  getProducts,
};
export default productsOfferedService;
