import React, { Fragment, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import productsOfferedService from "../services/productsOfferedService";
import InfiniteScroll from "react-infinite-scroll-component";
// import Pagination from "rc-pagination";
// import locale from "rc-pagination/lib/locale/en_US";

function ProductsOffered() {
  const [pageData, setPageData] = useState({
    products: [],
    pageIndex: 1,
    pageSize: 4,
  });
  const fetchProducts = (page, pageSize) => {
    productsOfferedService
      .getProducts(page, pageSize)
      .then(onGetProductsSuccess)
      .catch(onGetProductsError);
  };

  useEffect(() => {
    // Initial data load
    fetchProducts(pageData.pageIndex + 1, pageData.pageSize);
  }, []);
  const onGetProductsSuccess = (response) => {
    console.log(response.data.length);
    let productsFromAPI = response.data;
    if (productsFromAPI.length > 0) {
      setPageData((prevState) => {
        const productsData = { ...prevState };
        productsData.products = [...productsData.products, ...productsFromAPI];
        productsData.pageIndex += 1;
        return productsData;
      });
    }
  };

  const onGetProductsError = (error) => {
    console.log(error);
  };
  const loadMore = () => {
    // Load more products when the user scrolls down
    fetchProducts(pageData.pageIndex + 1, pageData.pageSize);
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
        <div className="grid grid-cols-4 gap-4" style={{ marginTop: "40px" }}>
          {pageData.products.map((singleProduct) => (
            <ProductCard oneProduct={singleProduct} key={singleProduct.id} />
          ))}
        </div>
      </InfiniteScroll>
    </Fragment>
  );
}

export default ProductsOffered;
