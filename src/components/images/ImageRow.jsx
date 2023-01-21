import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ImageCard from "./ImageCard";

const ImageRow = ({ title, objects }) => {
  return (
    <Box>
      <Typography variant="body1">{title}</Typography>
      <Grid container direction="row" mt={1}>
        {objects.map((obj) => (
          <Grid item xs={12 / objects.length} key={obj.text}>
            <ImageCard
              text={obj.text}
              img={obj.img}
              onClick={() => console.log(obj.text)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ImageRow;
