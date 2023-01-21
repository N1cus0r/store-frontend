import { Grid, Box, Button } from "@mui/material";
import React from "react";
import CenteredBox from "../../components/layout/CenteredBox";
import ProductCard from "../../components/products/ProductCard";
import ProductListLoader from "../../components/products/ProductListLoader";

const ProductListContent = ({ products, loading, setPage, pagination }) => {
  const getNextPage = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <CenteredBox>
      <Grid container justifyContent="center" spacing={2}>
        {products.map((product) => (
          <Grid item xs={3} key={product.id} style={{ display: "flex" }}>
            <ProductCard
              slug={product.slug}
              name={product.brand + " " + product.model + " " + product.color}
              price={product.price}
              image={product.image}
            />
          </Grid>
        ))}
        {pagination && (
          <Grid item>
            <Box alignItems="center">
              <Button onClick={getNextPage}>More</Button>
            </Box>
          </Grid>
        )}
      </Grid>
      {loading && <ProductListLoader loading={loading} />}
    </CenteredBox>
  );
};

export default ProductListContent;
