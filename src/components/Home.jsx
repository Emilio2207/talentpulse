import { Carousel } from "flowbite-react";
import React from "react";
import banner1 from "../../public/assets/banner1.png";

const Home = () => {
  const handleScrollToConectemos = () => {
    const section = document.getElementById("conectemos");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-8 md:my-8 py-8 flex flex-col md:flex-row-reverse items-center justify-between gap-8">
            <div className="w-full md:w-1/2">
              <img
                src={banner1}
                alt=""
                className="rounded-md w-full"
              />
            </div>
            {/* hero text */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
              <h1 className="text-3xl md:text-5xl font-semibold mb-2 md:mb-4 text-neutralDGrey leading-snug text-center md:text-left">
                Conecto Talento{" "}
                <span className="text-brandPrimary leading-snug">
                  con Oportunidades
                </span>
              </h1>
              <p className="text-neutralDGrey text-sm md:text-base mb-2 md:mb-4 text-center md:text-left">
                Buscando el talento que lleva tu empresa al siguiente
                nivel.
              </p>
              <button
                className="btn-primary"
                onClick={handleScrollToConectemos}
              >
                Carga tu CV
              </button>
            </div>
          </div>
          <div className="my-8 md:my-8 py-8 flex flex-col md:flex-row-reverse items-center justify-between gap-8">
            <div className="w-full md:w-1/2">
              <img
                src={banner1}
                alt=""
                className="rounded-md w-full"
              />
            </div>
            {/* hero text */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
              <h1 className="text-3xl md:text-5xl font-semibold mb-2 md:mb-4 text-neutralDGrey leading-snug text-center md:text-left">
                Reclutando{" "}
                <span className="text-brandPrimary leading-snug">
                  Marketing Digital
                </span>
              </h1>
              <p className="text-neutralDGrey text-sm md:text-base mb-2 md:mb-4 text-center md:text-left">
                Descubriendo talento y forjando trayectorias.
              </p>
              <button
                className="btn-primary"
                onClick={handleScrollToConectemos}
              >
                Carga tu CV
              </button>
            </div>
          </div>
          <div className="my-8 md:my-8 py-8 flex flex-col md:flex-row-reverse items-center justify-between gap-8">
            <div className="w-full md:w-1/2">
              <img
                src={banner1}
                alt=""
                className="rounded-md w-full"
              />
            </div>
            {/* hero text */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
              <h1 className="text-3xl md:text-5xl font-semibold mb-2 md:mb-4 text-neutralDGrey leading-snug text-center md:text-left">
                Seleccionando{" "}
                <span className="text-brandPrimary leading-snug">
                  Personal IT
                </span>
              </h1>
              <p className="text-neutralDGrey text-sm md:text-base mb-2 md:mb-4 text-center md:text-left">
                Buscando y encontrando el talento perfecto para ti.
              </p>
              <button
                className="btn-primary"
                onClick={handleScrollToConectemos}
              >
                Carga tu CV
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
