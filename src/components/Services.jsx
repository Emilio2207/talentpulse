import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Búsqueda y Contacto",
      descroption:
        "Identificamos y atraemos a los mejores talentos. Una vez identificados, establecemos comunicación directa para avanzar en el proceso.",
      image: "/src/assets/icons/membership.png",
    },
    {
      id: 2,
      title: "Entrevista y Negociación",
      descroption:
        "Realizamos entrevistas exhautivas para evaluar habilidades y competencias. Facilitamos la negociación entre la Empresa y el candidato.",
      image: "/src/assets/icons/group-clubs.png",
    },
    {
      id: 3,
      title: "Onboarding y Adaptación",
      descroption:
        "Apoyamos en la integración del nuevo empleado, asegurando una transicición fluida y rápida al nuevo entorno laboral.",
      image: "/src/assets/icons/associations.png",
    },
  ];
  return (
    <div
      className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto"
      id="service"
    >
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Servicios para Empresas
        </h2>
        <p className="text-neutralDGrey">
          A continuación, te presentamos los pasos clave de nuestro
          proceso.
        </p>

        {/* company logo */}

        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img src="/src/assets/company1.png" alt="" />
          <img src="/src/assets/company2.png" alt="" />
          <img src="/src/assets/company3.png" alt="" />
          <img src="/src/assets/company4.png" alt="" />
          <img src="/src/assets/company5.png" alt="" />
          <img src="/src/assets/company6.png" alt="" />
          <img src="/src/assets/company7.png" alt="" />
        </div>
      </div>

      {/* services card */}
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">
          Los mejores talentos para las Empresas
        </h2>
        <p className="text-neutralDGrey">
          Nuestro proceso garantiza una búsqueda eficiente.
        </p>
      </div>

      {/* cards */}
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer 
            hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 
            flex items-center justify-center h-full"
          >
            <div>
              <div className="bg-[#e8f5e9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                <img src={service.image} alt="" className="-ml-5" />
              </div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-sm text-neutralGrey">
                {service.descroption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
