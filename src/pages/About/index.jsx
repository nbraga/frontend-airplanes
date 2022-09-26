import React from "react";
import App from "../../layouts/App";

const About = () => {
  return (
    <App>
      <main className="main">
        <div className="container-xxl py-6">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="position-relative h-100">
                  <iframe
                    title="mapa"
                    className="position-relative w-100 h-100"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15937.157066500053!2d-59.958454370498615!3d-3.0167313813662187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1a332b482f2f%3A0xa720275164411e62!2sR.%2024%20-%20Cidade%20Nova%2C%20Manaus%20-%20AM%2C%2069099-430!5e0!3m2!1spt-BR!2sbr!4v1656352527387!5m2!1spt-BR!2sbr"
                    frameborder="0"
                    aria-hidden="false"
                    tabindex="0"
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <h6 className="text-primary text-uppercase mb-2">Contato</h6>
                <h1 className="display-6 mb-4">Entre em contato conosco!</h1>
                <p className="mb-4">
                  Olá! Muito feliz em saber que você está utilizando os serviços
                  da Gold's Airplanes, qualquer dúvida, sugestão ou reclamações,
                  só preencher o formulário e enviar...
                </p>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0 bg-light"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label for="name">Seu Nome</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control border-0 bg-light"
                          id="email"
                          placeholder="Your Email"
                        />
                        <label for="email">Seu Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0 bg-light"
                          id="subject"
                          placeholder="Subject"
                        />
                        <label for="subject">Título</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control border-0 bg-light"
                          placeholder="Leave a message here"
                          id="message"
                        ></textarea>
                        <label for="message">Mensagem</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary py-3 px-5"
                        type="submit"
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </App>
  );
};

export default About;
