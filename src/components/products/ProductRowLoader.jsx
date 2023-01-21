import React from "react";
import { Box, Grid } from "@mui/material";
import ClipLoader from "react-spinners/ClipLoader";
import ProductCard from "./ProductCard";

const ProductRowLoader = ({ loading }) => {
  return (
    <Box>
      <ClipLoader size={30} color={"#123abc"} loading={loading} />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        direction="row"
        mt={1}
      >
        <Grid item xs={11}>
          <Grid container>
            <Grid container direction="row">
              <Grid item xs={3}>
                <ProductCard />
              </Grid>
              <Grid item xs={3}>
                <ProductCard />
              </Grid>
              <Grid item xs={3}>
                <ProductCard />
              </Grid>
              <Grid item xs={3}>
                <ProductCard />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductRowLoader;
