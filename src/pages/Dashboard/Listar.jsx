import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

const Listar = () => {
  const [promocoes, setPromocoes] = useState([]);

  const excluirPromocao = (id) => {
    api
      .delete(`/api/promocoes/${id}`)
      .then((response) => {
        console.log(response);
        toast.success("Promoção excluída com sucesso");
        reloadApi();
      })
      .catch((error) => {
        toast.error("Ocorreu um erro ao excluir");
        console.log("Erro API", error);
      });
  };

  const reloadApi = () => {
    api
      .get("/api/promocoes")
      .then(function (response) {
        setPromocoes(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

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
                <button
                  className="btn btn-outline-danger border-2 w-100"
                  onClick={() => excluirPromocao(item.id)}
                >
                  Excluir
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listar;
