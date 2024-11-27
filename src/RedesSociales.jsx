import React from "react";
import { FaInstagram, FaRegEnvelope, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin, FiFacebook } from "react-icons/fi";
import { MdOutlinePhone } from "react-icons/md";

const RedesSociales = ({ redes }) => {
    const iconos = {
        Facebook: FiFacebook,
        Twitter: FaXTwitter,
        Instagram: FaInstagram,
        Gmail: FaRegEnvelope,
        Phone: MdOutlinePhone,
        LinkedIn: FiLinkedin
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