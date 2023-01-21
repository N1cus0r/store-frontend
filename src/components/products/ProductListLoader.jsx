import { Grid } from "@mui/material";
import React from "react";
import CenteredBox from "../layout/CenteredBox";
import ClipLoader from "react-spinners/ClipLoader";

const ProductListLoader = ({ loading }) => {
  return (
    <CenteredBox>
      <Grid container justifyContent="center">
        <ClipLoader size={30} color={"#123abc"} loading={loading} />
      </Grid>
    </CenteredBox>
  );
};

export default ProductListLoader;
