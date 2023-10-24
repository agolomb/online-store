import React from "react";
import { Fragment, useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import productsOfferedService from "../../services/productsOfferedService";
import InfiniteScroll from "react-infinite-scroll-component";
import Pagination from "rc-pagination";
import locale from "rc-pagination/lib/locale/en_US";

function ProductsOffered() {
  const [pageData, setPageData] = useState({
    products: [],
    productsMapped: [],
    pageIndex: 0,
    pageSize: 5,
    totalCount: 0,
  });
  useEffect(() => {
    productsOfferedService
      .getProducts()
      .then(onGetProductsSuccess)
      .catch(onGetProductsError);
  }, []);
  const mapProduct = (singleProduct) => {
    return <ProductCard oneProduct={singleProduct} />;
  };
  const onGetProductsSuccess = (response) => {
    console.log(response.data.length);
    let productsFromAPI = response.data;
    if (productsFromAPI.items.length > 0) {
      setPageData((prevState) => {
        const productsData = { ...prevState };
        productsData.products = [
          ...productsData.products,
          ...productsFromAPI.items,
        ];
        productsData.pageIndex += 1;
        return productsData;
      });
    }
    // setPageData((prevState) => {
    //   const productsData = { ...prevState };
    //   productsData.totalCount = response.data.length;
    //   productsData.products = productsFromAPI;
    //   productsData.productsMapped = productsFromAPI.map(mapProduct);
    //   //console.log(productsData.productsMapped);
    //   return productsData;
    // });
  };

  const onGetProductsError = (error) => {
    console.log(error);
  };
  const handlePageChange = (page) => {
    setPageData((prevState) => {
      const productsPaginted = { ...prevState };
      productsPaginted.pageIndex = page - 1;
      return productsPaginted;
    });
  };
  return (
    <Fragment>
      <h2 className="text-3xl font-bold underline">Products Offered</h2>
      <div className="container-fluid">
        <div className="row">{pageData.productsMapped}</div>
      </div>
      <div className="row">
        <div className="col-5"></div>
        <Pagination
          className="my-2 col-4"
          showTotal={(total, range) => ` ${range[0]}-${range[1]} of ${total}`}
          onChange={handlePageChange}
          current={pageData.pageIndex + 1}
          total={pageData.totalCount}
          pageSize={pageData.pageSize}
          locale={locale}
          showLessItems
        />
        <div className="col-3"></div>
      </div>
    </Fragment>
  );
}

export default ProductsOffered;
