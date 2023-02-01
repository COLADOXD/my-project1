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
          <Link
            to="/Introduccion"
            className="text-white font-serif text-xl ml-10"
          >
            Introduccion
          </Link>
          <Link
            to="/MarcoDeReferencia"
            className="text-white font-serif text-xl ml-10"
          >
            Marco de Referencia
          </Link>
          <Link to="/Encuesta" className="text-white font-serif text-xl mx-10">
            Encuesta
          </Link>
        </div>
      </nav>
      <div className="bg-secondary">{children}</div>
    </div>
  );
};

export default Layout;
