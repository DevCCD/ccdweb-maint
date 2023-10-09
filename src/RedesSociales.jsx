import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaRegEnvelopeOpen, FaLinkedinIn } from "react-icons/fa";

const RedesSociales = ({ redes }) => {
    const iconos = {
        Facebook: FaFacebook,
        Twitter: FaTwitter,
        Instagram: FaInstagram,
        Gmail: FaRegEnvelopeOpen,
        Phone: FaPhone,
        LinkedIn: FaLinkedinIn
    };

    return (
        <div className="redes-sociales">
        {redes.map((red, index) => {
            const Icono = iconos[red.nombre];
            return (
                <a key={index} href={red.enlace} target="_blank" rel="noopener noreferrer">
                    <Icono />
                </a>
            );
        })}
        </div>
    );
};

export default RedesSociales;
