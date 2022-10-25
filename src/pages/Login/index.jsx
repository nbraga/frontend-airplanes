import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";

import { useState, useEffect } from "react";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import Public from "../../layouts/Public";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@admin.com" && senha === "emorio") {
      localStorage.setItem("authenticated", "admin");
      window.location.reload();
    } else {
      alert("Usuario invalido");
    }
  };

  return (
    <Public>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            my: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="senha"
              id="senha"
              label="Senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Não tem uma conta? Registre-se"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Public>
  );
};

export default SignIn;
