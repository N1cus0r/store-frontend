import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import useFetching from "../../hooks/useFetching";
import ProductDetailContent from "./ProductDetailContent";

const ProductDetailPage = ({ slug }) => {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [relatedProductsPage, setRelatedProductsPage] = useState(1);
  const axiosApi = useAxios();
  const [fetchProduct, loadingProduct] = useFetching(async () => {
    //Fetching Product Info
    const productResponse = await axiosApi.get(
      "products/get-filtered-products",
      {
        params: { slug },
      }
    );

    const responseProduct = productResponse.data.results[0];

    setProduct(responseProduct);

    //Fetching Related Products By Category & Brand
    const relatedProductsResponse = await axiosApi.get(
      "products/get-related-products",
      {
        params: {
          category: responseProduct.category,
          brand: responseProduct.brand,
          slug,
        },
      }
    );
    const responseRelatedProducts = relatedProductsResponse.data;
    setRelatedProducts(responseRelatedProducts);
  });

  useEffect(() => {
    fetchProduct();
    return () => {
      setSelectedSize("");
    };
  }, [slug]);

  return (
    <ProductDetailContent
      product={product}
      relatedProducts={relatedProducts}
      relatedProductsPage={relatedProductsPage}
      setRelatedProductsPage={setRelatedProductsPage}
      loadingProduct={loadingProduct}
      selectedSize={selectedSize}
      setSelectedSize={setSelectedSize}
      formOpen={formOpen}
      setFormOpen={setFormOpen}
    />
  );
};

export default ProductDetailPage;
