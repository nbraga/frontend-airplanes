import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import api from "../../services/api";
import App from "../../layouts/App";

const Destinations = () => {
  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    api
      .get("/api/destinos")
      .then(function (response) {
        setDestinos(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <App>
      <Box my={5}>
        <main className="main">
          <div className="container-xxl px-6">
            <div className="container">
              <div
                className="text-center mx-auto mb-5 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <h6 className="text-primary text-uppercase mb-2">
                  Confira os destinos disponíveis
                </h6>
                <h1 className="display-6 mb-4">
                  As melhores opções de destinos do Planeta!
                </h1>
              </div>
              <div className="row g-4 justify-content-center">
                {destinos.map((item) => (
                  <div
                    key={item.id}
                    className="col-lg-4 col-md-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="courses-item d-flex flex-column bg-light overflow-hidden h-100">
                      <div className="text-center p-4 pt-0">
                        <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4">
                          {`R$ ${item.valor}`}
                        </div>
                        <h5 className="mb-3">{item.nome}</h5>
                        <p>{item.descricao}</p>
                        <ol className="breadcrumb justify-content-center mb-0">
                          <li className="breadcrumb-item small">
                            <i className="fa fa-signal text-primary me-2"></i>
                            {item.classe}
                          </li>
                          <li className="breadcrumb-item small">
                            <i className="fa fa-calendar-alt text-primary me-2"></i>
                            {item.qtd_semana} semanas
                          </li>
                        </ol>
                      </div>
                      <div className="position-relative mt-auto img-cards">
                        <img
                          className="img-thumbnail"
                          src={item.imagem}
                          alt={item.nome}
                        />
                        <div className="courses-overlay">
                          <a
                            href="/purchase"
                            className="btn btn-outline-primary border-2 w-100"
                          >
                            Realizar Compra
                          </a>
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

export default Destinations;
