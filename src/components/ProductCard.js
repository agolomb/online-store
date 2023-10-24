import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

const ProductCard = ({ oneProduct }) => {
  const aProduct = oneProduct;
  //console.log("each product on child card: ", aProduct);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(aProduct);
  };
  // const addToCart = () => {
  //   // Implement your logic for adding the item to the cart here
  //   console.log(`Added ${aProduct.title} to the cart`);
  // };
  const navigate = useNavigate();
  const onProductClicked = (e) => {
    navigate(`/productsoffered/${aProduct.id}`, { state: aProduct });
  };
  return (
    <Fragment>
      <div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="text-3xl font-bold underline">
          <div className="flex justify-center items-center h-32">
            <img
              className="w-32 h-32 object-contain" // Set dimensions and object-contain class
              src={aProduct.image}
              alt=""
            />
          </div>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {aProduct.title}
            </h5>
            <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              ${aProduct.price}
            </p>
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
              Add to Cart
            </button>
            <button
              onClick={onProductClicked}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
              See More Info
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ProductCard;
