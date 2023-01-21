import { Paper, Grid } from "@mui/material";
import React from "react";
import CenteredBox from "../../components/layout/CenteredBox";
import ProductListLoader from "../../components/products/ProductListLoader";
import ProductDetailImage from "./ProductDetailImage";
import ProductDetailForm from "./ProductDetailForm";
import OrderForm from "../../components/forms/OrderForm";
import ProductRow from "../../components/products/ProductRow";

const ProductDetailContent = ({
  product,
  relatedProducts,
  loadingProduct,
  relatedProductsPage,
  setRelatedProductsPage,
  selectedSize,
  setSelectedSize,
  formOpen,
  setFormOpen,
}) => {
  const { brand, model, color, image, price, sizes } = product;

  if (loadingProduct) return <ProductListLoader />;

  return (
    <>
      <CenteredBox>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <Paper>
              <Grid container direction="row" p={1}>
                <Grid item xs={8}>
                  <ProductDetailImage
                    brand={brand}
                    model={model}
                    color={color}
                    image={image}
                  />
                </Grid>
                <Grid item xs={4}>
                  <ProductDetailForm
                    price={price}
                    sizes={sizes}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                    setFormOpen={setFormOpen}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item>
            <ProductRow
              title={"Related Products"}
              products={relatedProducts}
              loading={loadingProduct}
              page={relatedProductsPage}
              setPage={setRelatedProductsPage}
            />
          </Grid>
        </Grid>
      </CenteredBox>
      <OrderForm
        open={formOpen}
        setOpen={setFormOpen}
        selectedSize={selectedSize}
        itemSlug={product.slug}
        itemPrice={product.price}
      />
    </>
  );
};

export default ProductDetailContent;
