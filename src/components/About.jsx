import React, { useState } from "react";
import PropTypes from "prop-types";
import aboutImg from "../../public/assets/about1.png";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      {/* about text */}
      <div
        className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8"
        id="about"
      >
        <div
          className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center 
        gap-12"
        >
          <div>
            <img src={aboutImg} alt="" className="rounded-md" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              Mi historia: fundadora y CEO de Talent Pulse
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              ¡Hola! Soy{" "}
              <span className="text-brandPrimary">Victoria</span> una
              apasionada reclutadora especializada en los sectores de
              marketing y tecnología.
            </p>
            <button className="btn-primary" onClick={openModal}>
              Ver más...
            </button>
          </div>
        </div>
      </div>

      {/* company stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3">
              Herramientas de <br />
              <span className="text-brandPrimary">
                Colaboración y Comunicación
              </span>
            </h2>
            <p>
              Comunicación y coordinación eficientes con clientes y
              candidatos.
            </p>
          </div>

          {/* stats */}
          <div
            className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around 
          gap-12"
          >
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="/assets/icons/member.png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    53+
                  </h4>
                  <p>Slack</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="/assets/icons/event.png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    400+
                  </h4>
                  <p>Meet</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="/assets/icons/club.png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    60+
                  </h4>
                  <p>Discord</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="/assets/icons/payment.png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    40+
                  </h4>
                  <p>Teams</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2 className="text-2xl font-semibold mb-4">
            Liderando Talent Pulse con pasión
          </h2>
          <p className="mb-4">
            Una reclutadora apasionada con 5 años de experiencia. Me
            especializo en formar equipos sólidos y conectar
            profesionales con oportunidades ideales para su
            desarrollo. Mi enfoque joven y cercano me permite entender
            las necesidades únicas de cada cliente y candidato,
            creando conexiones que construyan relaciones laborales
            duraderas y exitosas.
          </p>
          <button className="btn-primary" onClick={closeModal}>
            Cerrar
          </button>
        </Modal>
      )}
    </div>
  );
};

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
        {children}
      </div>
      <div className="fixed inset-0 z-40" onClick={onClose}></div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default About;
