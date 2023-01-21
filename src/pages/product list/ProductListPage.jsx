import axios from "axios";
import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import useFetching from "../../hooks/useFetching";
import ProductListContent from "./ProductListContent";

const ProductListPage = ({ brand, category }) => {
  const getParams = () => {
    const params = {};
    if (brand) params.brand = brand;
    if (category) params.category = category;
    params.page = page;

    return params;
  };

  const axiosApi = useAxios();
  const [pagination, setPagination] = useState(false);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [fetchProducts, loading] = useFetching(async () => {
    const response = await axiosApi.get("products/get-filtered-products", {
      params: getParams(),
    });

    if (page > 1) {
      setProducts((prevState) => [...prevState, ...response.data.results]);
    } else {
      setProducts(response.data.results);
    }

    setPagination(response.data.next ? true : false);
  });

  useEffect(() => {
    fetchProducts();
  }, [page]);

  return (
    <ProductListContent
      products={products}
      loading={loading}
      page={page}
      setPage={setPage}
      pagination={pagination}
    />
  );
};

export default ProductListPage;
