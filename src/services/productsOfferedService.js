import axios from "axios";

//Service call to fetch product data
let getProducts = () => {
  const config = {
    method: "GET",
    url: "https://fakestoreapi.com/products",
    headers: { "X-Api-Key": "API Key here" },
    contentType: "application/json",
  };
  return axios(config);
};

const productsOfferedService = {
  getProducts,
};
export default productsOfferedService;
