import { useState } from "react";

import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import api from "../../../services/api";

import { toast } from "react-toastify";

const Promocao = () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [qtdSemana, setQtdSemana] = useState("");
  const [classe, setClasse] = useState("");
  const [valor, setValor] = useState("");
  const [urlImagem, setUrlImagem] = useState("");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  const handleFile = (e) => {
    // image preview
    const image = e.target.files[0];

    setPreviewImage(image);

    // change image state
    setImage(image);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /*   if (image) {
      const formData = new FormData();

      formData.append("file", image);

      api
        .post("/api/upload", formData)
        .then(async (response) => {
          console.log(response);
          await setUrlImagem(response.data);
        })
        .catch((error) => {
          toast.error("Ocorreu um erro, tente novamente mais tarde!");
          console.error(error);
          return;
        });
    } */

    const data = {
      nome,
      descricao,
      classe,
      qtd_semana: qtdSemana,
      valor,
      imagem: urlImagem,
    };

    api
      .post("/api/promocoes", data)
      .then((response) => {
        console.log(response);
        limparCampos();
        toast.success("Promoção cadastrado com sucesso");
      })
      .catch((error) => {
        toast.error("Erro ao cadastrar, tente novamente mais tarde!");
        console.error(error);
      });
  };

  const limparCampos = () => {
    setNome("");
    setDescricao("");
    setQtdSemana("");
    setClasse("");
    setValor("");
    setUrlImagem("");
  };
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            required
            name="nome"
            id="nome"
            label="Nome"
            autoFocus
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            required
            label="Descrição"
            multiline
            rows={4}
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <FormControl fullWidth>
            <InputLabel id="select-tag">Classe</InputLabel>
            <Select
              labelId="select-tag"
              id="select-tag"
              value={classe}
              label="Tag"
              onChange={(e) => setClasse(e.target.value)}
            >
              <MenuItem value={"Baixa"}>Baixa</MenuItem>
              <MenuItem value={"Media"}>Média</MenuItem>
              <MenuItem value={"Alta"}>Alta</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            required
            name="quantidade"
            id="quantidade"
            label="Quantidade de Semana"
            value={qtdSemana}
            onChange={(e) => setQtdSemana(e.target.value)}
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            required
            name="valor"
            id="valor"
            label="Valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            required
            name="imagem"
            id="imagem"
            label="URL Imagem"
            value={urlImagem}
            onChange={(e) => setUrlImagem(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <Button fullWidth variant="contained" component="label">
            Upload
            <input
              id="file"
              name="file"
              hidden
              accept="image/*"
              type="file"
              onChange={handleFile}
            />
          </Button>
          {(image || previewImage) && (
            <img
              className="profile-image"
              src={
                previewImage ? URL.createObjectURL(previewImage) : `${image}`
              }
              alt="nome"
            />
          )}
        </Grid>
      </Grid>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Cadastrar
      </Button>
    </Box>
  );
};

export default Promocao;
