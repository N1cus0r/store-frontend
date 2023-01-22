import { Card, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ slug, name, price, image }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    return navigate(`/${slug}`);
  };

  return (
    <Card onClick={handleClick}>
      <Grid container direction="column" spacing={1} mt={1}>
        <Grid item xs={6}>
          {image ? (
            <CardMedia component="img" image={image} />
          ) : (
            <CardMedia
              component="img"
              image={
                "https://django-sneakerhouse.s3.eu-central-1.amazonaws.com/loading/loading.png"
              }
            />
          )}
        </Grid>
        <Grid item xs={3} ml={1}>
          {name && (
            <Typography
              sx={{
                typography: { sm: "body2", xs: "body3" },
              }}
            >
              {name}
            </Typography>
          )}
        </Grid>
        <Grid item xs={3} ml={1}>
          {price && (
            <Typography sx={{ typography: { sm: "body2", xs: "body3" } }}>
              ${price}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProductCard;
