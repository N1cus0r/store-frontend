import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import useFetching from "../../hooks/useFetching";
import Navbar from "./Navbar";
import SearchResult from "../search/SearchResult";
import { Box } from "@mui/material";

const Layout = () => {
  const axiosApi = useAxios();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState(false);
  const [fetchProducts, loading] = useFetching(async () => {
    const response = await axiosApi.get("products/search-products", {
      params: { search, page },
    });

    if (page > 1) {
      setProducts((prevState) => [...prevState, ...response.data.results]);
    } else {
      setProducts(response.data.results);
    }

    setPagination(response.data.next ? true : false);
  });

  useEffect(() => {
    if (search.length) {
      fetchProducts();
    } else {
      setProducts([]);
    }
  }, [search, page]);

  return (
    <>
      <Navbar search={search} setSearch={setSearch} setPage={setPage} />
      {search && (
        <SearchResult
          products={products}
          setSearch={setSearch}
          setPage={setPage}
          pagination={pagination}
          loading={loading}
        />
      )}
      <Box sx={{ display: search ? "none" : "flex" }}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
