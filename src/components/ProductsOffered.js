import React, { Fragment, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import productsOfferedService from "../services/productsOfferedService";
import InfiniteScroll from "react-infinite-scroll-component";

function ProductsOffered() {
  const [pageData, setPageData] = useState({
    products: [],
  });
  const fetchProducts = () => {
    productsOfferedService
      .getProducts()
      .then(onGetProductsSuccess)
      .catch(onGetProductsError);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const onGetProductsSuccess = (response) => {
    let productsFromAPI = response.data;
    if (productsFromAPI.length > 0) {
      setPageData((prevState) => {
        const productsData = { ...prevState };
        productsData.products = [...productsData.products, ...productsFromAPI];
        return productsData;
      });
    }
  };

  const onGetProductsError = (error) => {
    console.log(error);
  };

  const loadMore = () => {
    // Load more products when the user scrolls down
    fetchProducts();
  };

  return (
    <Fragment>
      <h2 className="text-3xl font-bold underline">Products Offered</h2>
      <InfiniteScroll
        dataLength={pageData.products.length}
        next={loadMore}
        hasMore={true} // Set to true to always allow infinite scrolling
        loader={<h4>Loading...</h4>}
      >
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4"
          style={{ marginTop: "40px" }}
        >
          {pageData.products.map((singleProduct) => (
            <ProductCard oneProduct={singleProduct} key={singleProduct.id} />
          ))}
        </div>
      </InfiniteScroll>
    </Fragment>
  );
}

export default ProductsOffered;
