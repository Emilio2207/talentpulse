import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title:
        "En mi labor, priorizo la eficacia y eficiencia para lograr procesos de reclutamiento ágiles y precisos.",
      subtitle: "Mi Enfoque",
      image: "/assets/blog1.png",
    },
    {
      id: 2,
      title:
        "Transparencia y feedback continuo son esenciales para fomentar la confianza y lograr un ajuste perfecto.",
      subtitle: "Valores",
      image: "/assets/blog2.png",
    },
    {
      id: 3,
      title:
        "Conecto talento con oportunidades, identificando candidatos adecuados para empresas innovadoras.",
      subtitle: "Mi Misión",
      image: "/assets/blog3.png",
    },
  ];
  return (
    <div
      className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12"
      id="faq"
    >
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4">
          Nuestra Filosofía
        </h2>
        <p className="text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto">
          Enfoque, Valores y Misión en Reclutamiento, Tecnología y
          Marketing Digital.
        </p>
      </div>

      {/* all blogs */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="mx-auto relative mb-12 cursor-pointer"
          >
            <img
              src={blog.image}
              alt=""
              className="hover:scale-95 transition-all duration-300 rounded-md"
            />
            <div
              className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto 
            absolute left-0 right-0 -bottom-12"
            >
              <h3 className="mb-3 text-neutralGrey font-semibold">
                {blog.title}
              </h3>
              <div className="flex items-center justify-center gap-8">
                <a
                  href="/"
                  className="font-bold text-brandPrimary hover:text-neutral-700"
                >
                  {blog.subtitle}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
