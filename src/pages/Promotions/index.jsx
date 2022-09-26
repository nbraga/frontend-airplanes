import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import api from "../../services/api";
import App from "../../layouts/App";

const Promotions = () => {
  const [promocoes, setPromocoes] = useState([]);

  useEffect(() => {
    api
      .get("/api/promocoes")
      .then(function (response) {
        setPromocoes(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <App>
      <Box my={5}>
        <main className="main">
          <div className="container-xxl py-6">
            <div className="container">
              <div
                className="text-center mx-auto mb-5 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <h6 className="text-primary text-uppercase mb-2">
                  Aproveite as promoções
                </h6>
                <h1 className="display-6 mb-4">
                  Confira as promoções válidas até final do mês, não perca!
                </h1>
              </div>
              <div className="row g-4 justify-content-center">
                {promocoes.map((item) => (
                  <div
                    key={item.id}
                    className="col-lg-4 col-md-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="courses-item d-flex flex-column bg-light overflow-hidden h-100 ">
                      <div
                        style={{ minHeight: "250px" }}
                        className="text-center p-2 pt-0 "
                      >
                        <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4">
                          R$ {item.valor}
                        </div>
                        <h5 className="h-2 mb-3">{item.nome}</h5>
                        <p className="h-30 mb-3">{item.descricao}</p>
                        <ol className="breadcrumb justify-content-center mb-0">
                          <li className="breadcrumb-item small">
                            <i className="fa fa-signal text-primary me-2"></i>
                            Alta
                          </li>
                          <li className="breadcrumb-item small">
                            <i className="fa fa-calendar-alt text-primary me-2"></i>
                            {item.qtd_semana}{" "}
                            {item.qtd_semana === 1 ? "Semana" : "Semanas"}
                          </li>
                        </ol>
                      </div>
                      <div className="position-relative img-cards">
                        <img
                          style={{ minHeight: "250px" }}
                          className="img-fluid cover-empty"
                          src={item.imagem}
                          alt={item.nome}
                        />
                        <div className="courses-overlay">
                          <button className="btn btn-outline-primary border-2 w-100 mt-2">
                            Realizar Compra
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </Box>
    </App>
  );
};

export default Promotions;
