import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

const ProductCard = ({ oneProduct }) => {
  const aProduct = oneProduct;
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(aProduct);
  };
  const navigate = useNavigate();
  const onProductClicked = (e) => {
    navigate(`/productsoffered/${aProduct.id}`, { state: aProduct });
  };
  return (
    <Fragment>
      <div className="m-1 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="m-2 flex justify-center items-center h-32">
          <img
            className="w-32 h-32 object-contain"
            src={aProduct.image}
            alt=""
          />
        </div>
        <div className="p-1">
          <h5 className="h-16 mb-2 text-base font-normal sm:font-bold md:font-thin lg:font-semibold xl:font-semibold tracking-tight text-gray-900 dark:text-white">
            {aProduct.title}
          </h5>
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            $
            {aProduct.price % 1 === 0
              ? aProduct.price.toFixed(0)
              : aProduct.price.toFixed(2)}
          </p>
        </div>
        <div className="m-2 flex justify-center">
          {" "}
          {/* Container div for buttons */}
          <button
            onClick={handleAddToCart}
            className="m-1 text-lg bg-blue-500 hover:bg-blue-700 text-white font-normal py-1 px-2 rounded-full focus:outline-none focus:shadow-outline"
          >
            Add to Cart
          </button>
          <button
            onClick={onProductClicked}
            className="m-1 text-lg bg-blue-500 hover-bg-blue-700 text-white font-normal py-1 px-2 rounded-full focus:outline-none focus:shadow-outline"
          >
            More Info
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCard;
