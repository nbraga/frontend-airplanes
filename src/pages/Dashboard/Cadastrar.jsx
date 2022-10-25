import { Box, Container, Typography } from "@mui/material";
import Destino from "./Cadastrar/Destino";
import Promocao from "./Cadastrar/Promocao";

export default function Registrar() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography>Cadastrar Promoção</Typography>
        <Promocao />
        <Typography>Cadastrar Destino</Typography>
        <Destino />
      </Box>
    </Container>
  );
}
