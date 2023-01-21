import { useParams } from "react-router-dom";
import ProductDetailPage from "../../pages/product detail/ProductDetailPage";
import ProductListPage from "../../pages/product list/ProductListPage";

const ParamsManager = () => {
  const { param } = useParams();
  const brands = ["Nike", "Jordan", "Supreme", "Bape"];
  const categories = ["Sneakers", "Apparel", "Accessories"];

  if (brands.includes(param)) return <ProductListPage brand={param} />;
  if (categories.includes(param)) return <ProductListPage category={param} />;

  return <ProductDetailPage slug={param} />;
};

export default ParamsManager;
