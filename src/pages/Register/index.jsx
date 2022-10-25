import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import Public from "../../layouts/Public";

const theme = createTheme();

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      email: email,
      senha: senha,
    };

    api.post("/api/usuarios", data).then(() => {
      toast.success("Usuário cadastrado com sucesso!");
      setLoading(false);
    });
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
            Registrar
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </Grid>
            </Grid>
            {!loading ? (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Criar conta
              </Button>
            ) : (
              <Button
                disabled
                variant="contained"
                fullWidth
                sx={{ mt: 3, mb: 2 }}
              >
                Criando...
              </Button>
            )}

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Já tem uma conta?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Public>
  );
}
