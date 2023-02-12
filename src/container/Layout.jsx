import React from "react";
import { Link } from "react-router-dom";
import iconReact from "../assets/icons8-react-64.png";

const Layout = ({ children }) => {
  return (
    <div className="bg-secondary min-h-screen">
      <nav className="flex flex-row justify-between bg-primary py-5">
        <div className="flex flex-row items-center">
          <img className="ml-10" src={iconReact} alt="" />
          <Link to="/" className="text-white font-serif text-2xl ml-2">
            Piensa
          </Link>
        </div>

        <div className="flex flex-row items-center justify-between">
          <a
            href="https://docs.google.com/document/d/1-g9PbymCe98ZvNeiMVx333H4eeqYA3Zc/edit?usp=sharing&ouid=100201763253693451289&rtpof=true&sd=true 
            "
            className="text-quinto font-serif text-xl ml-10"
          >
            .
          </a>
          <Link
            to="/Objetivos
            "
            className="text-white font-serif text-xl ml-10"
          >
            Objetivos
          </Link>
          <Link
            to="/Introduccion"
            className="text-white font-serif text-xl ml-10"
          >
            Justificacion y Formulacion
          </Link>
          <Link
            to="/Metodologial"
            className="text-white font-serif text-xl ml-10"
          >
            Metodologia y Propuesta
          </Link>
          <Link
            to="/MarcoDeReferencia"
            className="text-white font-serif text-xl mx-10"
          >
            Marco
          </Link>
          <Link to="/Encuesta" className="text-white font-serif text-xl mr-10">
            Encuesta
          </Link>
        </div>
      </nav>
      <div className="bg-secondary">{children}</div>
    </div>
  );
};

export default Layout;
