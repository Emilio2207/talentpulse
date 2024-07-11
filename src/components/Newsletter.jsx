import React from "react";

const Newsletter = () => {
  const handleRedirectTecnoIT = () => {
    window.open("https://forms.gle/5JFey7ui66iuzg7w5", "_blank");
  };

  const handleRedirectMarketing = () => {
    window.open("https://forms.gle/ppwJcPMBU7dGPNWe6", "_blank");
  };

  return (
    <div
      className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16"
      id="conectemos"
    >
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

export default Newsletter;
