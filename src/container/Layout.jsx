import React from "react";
import iconReact from "../assets/icons8-react-64.png";

const Layout = ({ children }) => {
  return (
    <div className="bg-secondary min-h-screen">
      <nav className="flex flex-row justify-between bg-primary py-5">
        <div href="/" className="flex flex-row items-center">
          <img className="ml-10" src={iconReact} alt="" />
          <a href="/" className="text-white font-serif text-2xl ml-2">
            Piensa
          </a>
        </div>
        <div className="flex flex-row items-center justify-between">
          <a
            href="/Introduccion"
            className="text-white font-serif text-xl ml-10"
          >
            Introduccion
          </a>
          <a
            href="/MarcoDeReferencia"
            className="text-white font-serif text-xl ml-10"
          >
            Marco de Referencia
          </a>
          <a href="/Encuesta" className="text-white font-serif text-xl mx-10">
            Encuesta
          </a>
        </div>
      </nav>
      <div className="bg-secondary">{children}</div>
    </div>
  );
};

export default Layout;
