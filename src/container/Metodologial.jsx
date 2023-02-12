import React from "react";
import Grupal3 from "../assets/Grupal13.jpeg";
import Propuesta from "./Propuesta";

const Metodologia = () => {
  return (
    <section className="h-full bg-secundary">
      <img className="w-full h-[400px]" src={Grupal3} alt="" />

      <h1 className="font-serif text-3xl text-center my-8 text-red-800">
        Metodologia
      </h1>
      <div className="flex flex-row mb-10">
        <p className="w-2/4 text-white font-sans mx-10 text-left text-[25px]">
          Iniciación: <br /> desde un inicio se pensó en crear una página web
          donde se mostrará solo los servicios que ofrece la empresa, un
          pensamiento que no sobrevivió al primer impacto con la reunión con los
          dueños de la empresa, ya que ellos querían una aplicación donde los
          clientes podrían interactuar con la página, por eso mismo se accedió a
          modificar los primeros conceptos que se tenían pensados para la página
          dando como resultado la aplicación. <br /> Planificación: <br /> para
          proceder con la ejecución del presente proyecto se estableció un
          análisis de herramientas tecnológicas software siendo estas: <br />
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
          Implementación: <br /> con todo ya especificado el proyecto comenzó
          con la utilización de la aplicación Figma, donde se creó varios
          diseños que se mostrarían al propietario de la empresa, después de
          varios rechazos, se escogió un diseño para comenzar con la creación
          del código HTML gracias al programa de Visual Estudio Code, sin
          olvidar la aplicación de los estilos CSS a la página, sin olvidar la
          forma en como se pudo trabajar en equipo gracias a la
          aplicación/página GitHub. <br /> Revisión: <br /> para la realización
          del proyecto se tuvo que trabajar con el jefe de la empresa cada vez
          que se tuviera una idea que se quisiera implementar a la aplicación,
          además de corregir los errores que se viera en el desarrollo y así
          poder ir arreglando con el único propósito de dar un proyecto de
          calidad. <br /> Lanzamiento: <br /> con la aplicación ya acabada y con
          tan solo algunas cosas que se debe arreglar junto con el jefe, se
          decidió usar la página Vercel como un medio para la publicación de una
          forma gratuita, eso es hasta que se compre un dominio para la
          aplicación.
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
