import { Carousel } from "flowbite-react";
import React from "react";
import banner1 from "../assets/banner1.png";

const Home = () => {
  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div
            className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between 
          gap-12"
          >
            <div>
              <img src={banner1} alt="" className="rounded-md" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Conecto Talento{" "}
                <span className="text-brandPrimary leading-snug">
                  con Oportunidades
                </span>
              </h1>
              <p className="text-neutralDGrey text-base mb-8">
                Buscando el talento que lleva tu empresa al siguinete
                nivel.
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
          <div
            className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between 
          gap-12"
          >
            <div>
              <img src={banner1} alt="" className="rounded-md" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Reclutando{" "}
                <span className="text-brandPrimary leading-snug">
                  Marketing Digital
                </span>
              </h1>
              <p className="text-neutralDGrey text-base mb-8">
                Descubriendo talento y forjando trayectorias.
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
          <div
            className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between 
          gap-12"
          >
            <div>
              <img src={banner1} alt="" className="rounded-md" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Seleccionando{" "}
                <span className="text-brandPrimary leading-snug">
                  Personal IT
                </span>
              </h1>
              <p className="text-neutralDGrey text-base mb-8">
                Buscando y encontrando el talento perfecto para ti.
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
