import React from "react";
import api from "../../services/api";
import { useState } from "react";
import { Box, Grid, TextField, Button } from "@mui/material";

const Pesquisar = () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [semana, setSemana] = useState("");
  const [classe, setClasse] = useState("");
  const [imagem, setImagem] = useState("");
  const [valor, setValor] = useState("");
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(false);

  const searchWithId = (e) => {
    e.preventDefault();
    api
      .get(`/api/promocoes/${search}`)
      .then(function (response) {
        if (response.data === "") {
          setActive(false);
        } else {
          setNome(response.data.nome);
          setDescricao(response.data.descricao);
          setValor(response.data.valor);
          setImagem(response.data.imagem);
          setSemana(response.data.qtd_semana);
          setClasse(response.data.classe);
          setActive(true);
        }
      })
      .catch(function (error) {
        console.error(error);
        setActive(false);
      });
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            required
            name="nome"
            id="nome"
            label="Digite o ID para pesquisar"
            autoFocus
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button onClick={searchWithId}>Pesquisar</Button>
        </Grid>
      </Grid>
      <div className="row g-4 justify-content-center">
        {active ? (
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="courses-item d-flex flex-column bg-light overflow-hidden h-100 ">
              <div
                style={{ minHeight: "250px" }}
                className="text-center p-2 pt-0 "
              >
                <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4">
                  R$ {valor}
                </div>
                <h5 className="h-2 mb-3">{nome}</h5>
                <p className="h-30 mb-3">{descricao}</p>
                <ol className="breadcrumb justify-content-center mb-0">
                  <li className="breadcrumb-item small">
                    <i className="fa fa-signal text-primary me-2"></i>
                    {classe}
                  </li>
                  <li className="breadcrumb-item small">
                    <i className="fa fa-calendar-alt text-primary me-2"></i>
                    {semana} {semana === 1 ? "Semana" : "Semanas"}
                  </li>
                </ol>
              </div>
              <div className="position-relative img-cards">
                <img
                  style={{ minHeight: "250px" }}
                  className="img-fluid cover-empty"
                  src={imagem}
                  alt={nome}
                />
              </div>
            </div>
          </div>
        ) : (
          <h1>Nenhuma promoção encontrada</h1>
        )}
      </div>
    </Box>
  );
};

export default Pesquisar;
