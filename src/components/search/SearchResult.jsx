import {
  Box,
  Button,
  Card,
  CardMedia,
  Dialog,
  DialogContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CenteredBox from "../layout/CenteredBox";
import ProductListLoader from "../products/ProductListLoader";

const SearchResult = ({
  products,
  setSearch,
  setPage,
  pagination,
  loading,
}) => {
  const navigate = useNavigate();
  const handleClick = (slug) => {
    setSearch("");
    return navigate(`/${slug}`);
  };

  const loadNextPage = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        zIndex: 1,
        position: "relative",
      }}
    >
      <CenteredBox>
        <Grid container direction="column" spacing={1} backgroundColor="white">
          {products.map((product) => (
            <Grid item key={product.id}>
              <Card onClick={() => handleClick(product.slug)}>
                <Grid container direction="row" spacing={2}>
                  <Grid item xs={3}>
                    <CardMedia component="img" image={product.image} />
                  </Grid>
                  <Grid item xs={9}>
                    <Typography variant="h5">
                      {product.brand + " " + product.model}
                    </Typography>
                    <Typography variant="h6">{product.color}</Typography>
                    <Typography variant="body1">${product.price}</Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
          {pagination && (
            <Grid item>
              <Box textAlign="center">
                <Button onClick={loadNextPage}>More</Button>
              </Box>
            </Grid>
          )}
        </Grid>
        {loading && <ProductListLoader loading={loading} />}
      </CenteredBox>
    </Box>
  );
};

export default SearchResult;
