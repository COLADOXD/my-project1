import React from "react";
import Grupal3 from "../assets/Grupal13.jpeg";
import Propuesta from "./Propuesta";

const Metodologia = () => {
  return (
    <section className="h-full bg-secundary">
      <img className="w-full h-[400px]" src={Grupal3} alt="" />

      <h1 className="font-serif text-5xl text-center my-8 text-red-800">
        Metodologia
      </h1>
      <div className="flex flex-row mb-10">
        <p className="w-2/4 text-white font-sans mx-10 text-left text-[25px]">
          Iniciación: <br /> Desde un inicio se ideo en crear una pagina web
          donde se mostrará solo los servicios que ofrece la empresa, una idea
          que fue rechazada por el jefe de la empresa, ya que el buscaba tener
          un sitio web donde el usuario pudiera interactuar con el entorno, por
          eso mismo se accedió a modificar los conceptos que se tenían
          planteados dando como resultado la aplicación.
          <br /> Planificación: <br /> para proceder con la ejecución del
          proyecto se utilizaron tres herramientas ensenciales: <br />
          <li>
            Visual Estudio Code con el programa donde se ara la creación de la
            página web.
          </li>
          <li>
            GitHup un sitio web y aplicación que tienen como función el de
            compartir las modificaciones que se hace al archivo base.
          </li>
          <li>Figma el programa donde se realizará el diseño del sitio web.</li>
        </p>
        <div className="w-2/4 text-white font-sans mx-10 text-left text-[25px]">
          Implementación: <br /> Con todo ya definido, se comenzó con el
          proyecto utilizando la aplicación Figma, donde se creo varios diseños
          que fueron rechazados, hasta que se escogió un diseño, con lo que se
          comenzó a trabajar en la creación del código HTML con sus respectivos
          CSS de la aplicación.
          <br /> Revisión: <br /> Con cada cambio que se realizo o idea que se
          aplicó, se tuvo que comentar con el jefe, viendo si era viable o no
          aquellas ideas, además de ir corrigiendo los errores que se
          presentaran, con el propósito de entrar un producto de calidad.
          <br /> Lanzamiento: <br /> Para el lanzamiento, se tiene pensado el
          comprar un dominio, hasta eso, se opto por utilizar la pagina Vercel
          como un medio para la publicación de forma gratuita.
        </div>
      </div>
      <div className="flex flex-row mb-10">
        <div className="w-2/4 text-white font-sans mx-10 text-left text-lg"></div>
      </div>
      <Propuesta></Propuesta>
    </section>
  );
};

export default Metodologia;
