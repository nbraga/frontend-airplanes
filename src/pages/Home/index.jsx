import React from "react";
import "./home.css";
import App from "../../layouts/App";

const Home = () => {
  return (
    <App>
      <main className="main">
        <div className="carousel">
          <div
            id="carouselExampleCaptions"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/images/maranhao.jpg"
                  className="d-block w-100"
                  alt="Lençóis Maranhenses (MA)"
                />
                <div className="carousel-caption d-none d-md-block text-black">
                  <h5>Lençóis Maranhenses (MA)</h5>
                  <p className="text-black">
                    Quem está em busca de uma boa aventura mas com um visual de
                    sonhos, conheça o Lençóis Maranhenses, localizado no
                    Nordeste do país. O pico conta com uma natureza deslumbrante
                    e uma grande área de preservação natural.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="/images/fernando.jpg"
                  className="d-block w-100"
                  alt="Fernando de Noronha (PE)"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Fernando de Noronha (PE)</h5>
                  <p>
                    Esse é um dos pontos turísticos e destinos de surf trips
                    mais famosos entre brasileiros e gringos. Isso tudo porque o
                    local é conhecido como o Hawaii brasileiro, contando com
                    águas claras, uma natureza intensa e tubos insanos – dignos
                    de Pipeline.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="/images//manaus.jpg"
                  className="d-block w-100"
                  alt="Encontro das Águas – Rio Negro e Solimões (AM)"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Encontro das Águas – Rio Negro e Solimões (AM)</h5>
                  <p>
                    Quando se trata de Brasil, a Amazônia logo nos vem à cabeça.
                    Um fenômeno faz com que a visita ao lugar seja inédita: O
                    famoso encontro encontro das águas entre o rios Negro e
                    Solimões. Experimente remar com Kayak por lá.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <img
              src="/images/destinos.jpg"
              className="card-img-top"
              alt="Destinos"
            />
            <div className="card-body">
              <h5 className="card-title">Os melhores destinos</h5>
              <p className="card-text">
                Conheça os melhores lugares para viajar e tenha acesso a
                diversas novidades.
              </p>
              <a href="/destinations" className="btn btn-primary">
                Saiba Mais
              </a>
            </div>
          </div>

          <div className="card">
            <img
              src="/images/promocoes.jpg"
              className="card-img-top"
              alt="Promoções"
            />
            <div className="card-body">
              <h5 className="card-title">As melhores promoções</h5>
              <p className="card-text">
                Conheça as melhores promoções do Mundo, imperdivel, aproveite
                que é até final desse mês.
              </p>
              <a href="/promotions" className="btn btn-primary">
                Saiba Mais
              </a>
            </div>
          </div>

          <div className="card">
            <img
              src="/images/contato.jpg"
              className="card-img-top"
              alt="Contato"
            />
            <div className="card-body">
              <h5 className="card-title">SAC</h5>
              <p className="card-text">
                Nossos atendentes estarão disponíveis 24h por dia para melhor
                atendimento!
              </p>
              <a href="/sac" className="btn btn-primary">
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </main>
    </App>
  );
};

export default Home;
