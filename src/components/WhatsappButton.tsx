import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "@/src/styles/whatsapp-button.css";

function WhatsappButton() {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
  const message =
    "Hola, quiero más información sobre los servicios disponibles.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsappButton;
