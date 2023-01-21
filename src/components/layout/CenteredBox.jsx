import { Box } from "@mui/material";
import React from "react";

const CenteredBox = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "75%", md: "55%" },
          marginTop: 2,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default CenteredBox;
