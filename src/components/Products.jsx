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
                  Experiencia en Marketing Digital:{" "}
                </span>
                Con más de cinco años trabajando en ecommerce, conozco
                a fondo las tendencias y demandas del marketing
                digital.
                <br />
                <span className="text-brandPrimary font-semibold">
                  Red Amplia y Base de Datos Extensa:{" "}
                </span>
                Cuento con una extensa red de contactos y una base de
                datos de profesionales IT y marketing digital, lo que
                me permite acceder a candidatos de alto nivel.
                <br />
                <span className="text-brandPrimary font-semibold">
                  Compromiso con la Calidad:{" "}
                </span>
                Mi prioridad es la excelencia en cada etapa del
                proceso de reclutamiento, garantizando los mejores
                resultados para tu empresa.
              </p>
              <h5 className="text-brandPrimary text-xl font-semibold mb-2">
                Tu mejor aliado en reclutamiento
              </h5>
              <p className="text-base text-neutralGrey mb-8">
                Resultados excepcionales siempre.
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
