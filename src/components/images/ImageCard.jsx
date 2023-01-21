import { Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ImageCard = ({ text, img }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    return navigate(`/${text}`);
  };

  return (
    <Card onClick={handleClick}>
      <CardMedia component="img" image={img} />
      <Typography variant="body2">{text}</Typography>
    </Card>
  );
};

export default ImageCard;
