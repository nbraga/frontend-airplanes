import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { toast } from "react-toastify";
import App from "../../layouts/App";

export default function SignUp() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      nome: nome,
      sobrenome: sobrenome,
      email: email,
    };

    toast.success("Compra confirmada, seu ticket será enviado para seu email!");
    setLoading(false);
  };

  return (
    <App>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            minHeight: "100vh",
            my: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Confirme seus dados para confirmar a compra
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nome"
                  autoFocus
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Sobrenome"
                  name="lastName"
                  autoComplete="family-name"
                  value={sobrenome}
                  onChange={(e) => setSobrenome(e.target.value)}
                />
              </Grid>
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
            </Grid>
            {!loading ? (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Confirmar
              </Button>
            ) : (
              <Button
                disabled
                variant="contained"
                fullWidth
                sx={{ mt: 3, mb: 2 }}
              >
                Confirmando...
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </App>
  );
}
