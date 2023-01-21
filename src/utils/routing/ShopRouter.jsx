import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import HomePage from "../../pages/home/HomePage";
import ProductDetailPage from "../../pages/product detail/ProductDetailPage";
import ProductListPage from "../../pages/product list/ProductListPage";
import ParamsManager from "./ParamsManager";

const ShopRouter = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="/:param" element={<ParamsManager />}>
            {/* <Route path="/:productSlug" element={<ProductDetailPage />} /> */}
            {/* <Route path="/:productFilter" element={<ProductListPage />} /> */}
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={""} />} />
      </Routes>
    </>
  );
};

export default ShopRouter;
