import React from "react";
import {
  Box,
  Grid,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";

const ProductDetailForm = ({
  price,
  sizes,
  selectedSize,
  setSelectedSize,
  setFormOpen,
}) => {
  return (
    <>
      <Grid container direction="column" spacing={1}>
        <Grid item xs={3}>
          <Typography variant="h5">${price}</Typography>
        </Grid>
        <Grid item xs={3}>
          {sizes?.length ? (
            <FormControl fullWidth size="small">
              <InputLabel>Size</InputLabel>
              <Select
                label="Size"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                {sizes.map((size) => (
                  <MenuItem key={size} value={size}>
                    {size}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
            <Box textAlign="center">
              <Button variant="contained" onClick={() => setFormOpen(true)}>
                Place Order
              </Button>
            </Box>
          )}
        </Grid>
        <Grid item xs={3} justify="space-between">
          {selectedSize && (
            <Box textAlign="center">
              <Button variant="contained" onClick={() => setFormOpen(true)}>
                Place Order
              </Button>
            </Box>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetailForm;
