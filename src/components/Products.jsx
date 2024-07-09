import React from "react";
import aboutImg from "../assets/mobile-login.png";
import Maecenas from "../assets/maecenas.png";

const Products = () => {
  return (
    <div>
      {/* about text */}
      <div
        className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8"
        id="product"
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
              <span className="text-brandPrimary">eBooks</span>{" "}
              Especializados en Tecnologia, Marketing y Selección de
              Personal
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Bienvenido a nuestra colección de eBooks, creados para
              brindar conocimientos clave en tecnología, marketing
              digital y selección de personal. Cada eBook ofrece
              información práctica y actualizada, diseñada para
              mejorar tus habilidades y mantenerte al día con las
              últimas tendencias.
            </p>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Descubre estrategias efectivas de marketing, profundiza
              en las tecnologías más relevantes y aprende técnicas
              avanzadas de reclutamiento. Estos recursos te ayudarán a
              avanzar en tu carrera y alcanzar tus objetivos
              profesionales. ¡Explora nuestra biblioteca y comienza tu
              viaje hacia el éxito!
            </p>
            <button className="btn-primary">Proximamente!</button>
          </div>
        </div>
      </div>

      {/* company stats */}
      <div
        className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16"
        id="testimonial"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/3">
            <img src={Maecenas} alt="" className="rounded-md" />
          </div>

          {/* stats */}
          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-7">
                <span className="text-brandPrimary font-semibold">
                  Especialización en Marketing y Tecnología:{" "}
                </span>
                Conozco las tendencias y las demandas de estos
                sectores en constante evolución.
              </p>
              <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-7">
                <span className="text-brandPrimary font-semibold">
                  Red Amplia:{" "}
                </span>
                Cuento con una extensa red de contactos y recursos que
                me permite acceder a talentos de alto nivel.
              </p>
              <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-7">
                <span className="text-brandPrimary font-semibold">
                  Compromiso con la Calidad:{" "}
                </span>
                No me conformo con menos que la excelencia en cada
                etapa del proceso de reclutamiento.
              </p>
              <h5 className="text-brandPrimary text-xl font-semibold mb-2">
                ¿Por qué Elegirme?
              </h5>
              <p className="text-base text-neutralGrey mb-8">
                British Dragon Boat Racing Association
              </p>
              <div>
                <div className="flex items-center gap-8 flex-wrap">
                  <img
                    src="/src/assets/company1.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <img
                    src="/src/assets/company2.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <img
                    src="/src/assets/company3.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <img
                    src="/src/assets/company4.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <img
                    src="/src/assets/company5.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <img
                    src="/src/assets/company6.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <div className="flex items-center gap-8">
                    <a
                      href="/"
                      className="font-bold text-brandPrimary hover:text-neutral-700"
                    >
                      Meet all customers{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="11"
                        viewBox="0 0 17 11"
                        fill="none"
                        className="inline-block ml-2"
                      >
                        <path
                          d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.
                          39905M15 5.39905L1 5.39905"
                          stroke="#4caf4f"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
