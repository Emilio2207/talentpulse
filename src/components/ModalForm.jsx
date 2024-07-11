import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import emailjs from "emailjs-com";

const ModalForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setStatusMessage("");
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.init("oInK5f0S1hGrYUt0t");

    const serviceID = "default_service";
    const templateID = "template_0qw5uqq";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams)
      .then((response) => {
        console.log(
          "Email sent successfully!",
          response.status,
          response.text
        );
        setStatusMessage("Mensaje enviado con éxito!");
        setTimeout(() => {
          setStatusMessage("");
          onClose();
        }, 3000);
      })
      .catch((err) => {
        console.error("Failed to send email. Error: ", err);
        setStatusMessage(
          "Error al enviar el mensaje. Por favor, inténtalo de nuevo."
        );
        setTimeout(() => {
          setStatusMessage("");
          onClose();
        }, 3000);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative z-50">
        <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Nombre y Apellido
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Mensaje
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-brandPrimary text-white py-2 px-4 rounded"
            >
              Enviar
            </button>
          </div>
        </form>
        {statusMessage && (
          <div className="mt-4 text-center text-sm text-green-600">
            {statusMessage}
          </div>
        )}
      </div>
      <div className="fixed inset-0 z-40" onClick={onClose}></div>
    </div>
  );
};

ModalForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalForm;
