import React, { useEffect } from "react";
import { useState } from "react";
import { getActiveProductsData } from "../ApiHelper";
import { Product, ProductsData } from "../../components/interfaces";
import ProductItem from "../../components/ProductItem/ProductItem";
import PageWrapper from '../PageWrapper';
import Spinner from "../../components/Spinner/Spinner";

const DATA_STATES = {
  waiting: 'WAITING',
  loaded: 'LOADED',
  error: 'ERROR'
};

const ProductsPage = () => {
  const [loadingState, setLoadingState] = useState(DATA_STATES.waiting);
  const [data, setData] = useState([] as ProductsData);

  const getActiveProducts = async () => {
    setLoadingState(DATA_STATES.waiting);
    const { activeProducts, errorOccured } = await getActiveProductsData();
    setData(activeProducts);
    setLoadingState(errorOccured ? DATA_STATES.error : DATA_STATES.loaded);
  };

  useEffect(() => {
    getActiveProducts();
  }, []);

  let content;
  if (loadingState === DATA_STATES.waiting)
    content = (
      <div
        className="flex flex-row justify-center w-full pt-4"
        data-testid="loading-spinner-container"
      >
        <Spinner />
      </div>
    );
  else if (loadingState === DATA_STATES.loaded)
    content = (
      <div
        className="flex flex-col gap-4 w-full bg-neutral-500 p-4"
        data-testid="products-container"
      >
        {data.length > 0 && data.map((product) => (
          <ProductItem
            key={product.ProductID}
            ProductID={product.ProductID}
            ProductName={product.ProductName}
            ProductPhotoURL={product.ProductPhotoURL}
          />
        ))}
      </div>
    );
  else
    content = (
      <div
        className="flex flex-row justify-center w-full pt-4 text-3xl font-bold text-white"
        data-testid="error-container"
      >
        An error occured fetching the data!
      </div>
    );

  return (
    <PageWrapper>
      <h1 className="text-3xl font-bold text-white">
        Active Products
      </h1>
      { content }
    </PageWrapper>
  );
};

export default ProductsPage
