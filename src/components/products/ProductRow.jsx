import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ProductRowLoader from "./ProductRowLoader";

const ProductRow = ({ title, products, loading, page, setPage }) => {
  const baseURL = "http://127.0.0.1:8000";

  const getNextPage = () => {
    setPage((prevPageState) => prevPageState + 1);
  };

  const getPrevPage = () => {
    setPage((prevPageState) => prevPageState - 1);
  };

  if (page === 1) products = products.slice(0, 4);
  if (page === 2) products = products.slice(4, 8);
  if (page === 3) products = products.slice(8, 12);

  if (loading) {
    return <ProductRowLoader />;
  }

  return (
    <Box>
      <Typography variant="body1">{title}</Typography>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        direction="row"
        mt={1}
      >
        <Grid item xs={11}>
          <Grid container direction="row" alignItems="stretch">
            {products.map((product) => (
              <Grid item xs={3} key={product.id} style={{ display: "flex" }}>
                <ProductCard
                  slug={product.slug}
                  name={
                    product.brand + " " + product.model + " " + product.color
                  }
                  price={product.price}
                  image={product.image}
                  // image={baseURL + product.image}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={0.5}>
          {page !== 1 && (
            <IconButton onClick={getPrevPage}>
              <ArrowDropUpIcon />
            </IconButton>
          )}
          {page !== 3 && (
            <IconButton onClick={getNextPage}>
              <ArrowDropDownIcon />
            </IconButton>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductRow;
