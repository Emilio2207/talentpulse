import React from "react";

const Newsletter = () => {
  const handleRedirectTecnoIT = () => {
    window.open("https://forms.gle/5JFey7ui66iuzg7w5", "_blank");
  };

  const handleRedirectMarketing = () => {
    window.open("https://forms.gle/ppwJcPMBU7dGPNWe6", "_blank");
  };

  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
      <div className="flex items-center justify-center lg:w-2/5 mx-auto">
        <div className="text-center">
          <h2 className="lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug">
            Conectemos
          </h2>
          <p className="text-md text-neutralGrey mb-8 md:w-3/4 mx-auto">
            Si estás buscando talento excepcional para tu empresa o si
            eres un profesional en busca de nuevas oportunidades, me
            encantaría ayudarte. Vamos a conectar, construir y crecer
            juntos.
          </p>
          <div className="flex items-center justify-center gap-8">
            <button
              onClick={handleRedirectMarketing}
              className="btn-primary text-white"
            >
              CV Marketing{" "}
            </button>
            <button
              onClick={handleRedirectTecnoIT}
              className="btn-primary text-white"
            >
              CV Tecno IT{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/*
const Newsletter = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
      <div className="flex items-center justify-center lg:w-2/5 mx-auto">
        <div className="text-center">
          <h2 className="lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug">
            Pellentesque suscipit fringilla libero eu.
          </h2>
          <div className="flex items-center justify-center gap-8">
            <button className="btn-primary text-white">
              Get a Demo{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                className="inline-block ml-2"
              >
                <path
                  d="M10.2503 7.00012L12.7201 4.53039C13.013 4.23749 13.013 3.7626 12.7201 3.4697L10.2503
              0.999966M12.5004 4.00004L1.50012 4.00004"
                  stroke="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
*/
export default Newsletter;
