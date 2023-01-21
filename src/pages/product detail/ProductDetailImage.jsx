import React from "react";
import Image from "mui-image";
import { Grid, Typography } from "@mui/material";

const ProductDetailImage = ({ brand, model, color, image }) => {
  return (
    <Grid container direction="column">
      <Grid item xs={4}>
        <Typography variant="h6">{brand + " " + model}</Typography>
        <Typography variant="body2">{color}</Typography>
      </Grid>
      <Grid item xs={8}>
        <Image src={image} duration={0} />
      </Grid>
    </Grid>
  );
};

export default ProductDetailImage;
