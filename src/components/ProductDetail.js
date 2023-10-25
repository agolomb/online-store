import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "./CartContext";
function ProductDetail() {
  const { state } = useLocation();

  const getStarRating = (rating) => {
    const starRating =
      "★".repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? "½" : "");
    return starRating;
  };

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(state);
  };
  return (
    <Fragment>
      <div className="flex justify-center" style={{ marginTop: "70px" }}>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h4 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {state.title}
          </h4>
          <h6 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Category: {state.category}
          </h6>
          <img className="p-8 rounded-t-lg" src={state.image} alt="" />

          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {state.description}
            </h5>
            <div className="flex items-center mt-2.5 mb-5">
              <span className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Rating:&nbsp;
              </span>
              <span className="text-3xl font-bold text-yellow-500">
                {getStarRating(state.rating.rate)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                $
                {state.price % 1 === 0
                  ? state.price.toFixed(0)
                  : state.price.toFixed(2)}
              </span>
              <button
                onClick={handleAddToCart}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default ProductDetail;
