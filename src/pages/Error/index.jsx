import { Box, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import App from "../../layouts/App";

const Error404 = () => {
  return (
    <App>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: 10,
        }}
      >
        <Typography fontSize={50} fontWeight="bold">
          Ops
        </Typography>
        <Typography>A página que você tentou acessar não existe</Typography>
        <img src="/images/error-404.png" alt="404" width={300} />
        <NavLink to="/">Retornar para página principal</NavLink>
      </Box>
    </App>
  );
};

export default Error404;
