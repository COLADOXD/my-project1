import React from "react";
import integranteOne from "../assets/integrante-1.jpg";
import integranteTwo from "../assets/integrante-2.jpg";
import integranteThree from "../assets/integrante-3.jpg";
import integranteFour from "../assets/integrante-4.jpg";

import trabajoGrupal from "../assets/beneficios-trabajo-en-equipo1.jpg";

const Main = () => {
  return (
    <section className="">
      <img className="w-full h-[400px]" src={trabajoGrupal} alt="" />
      <div>
        <h1 className="text-center text-8xl font-serif text-red-700">
          Resumen
        </h1>
        <div className="flex flex-row text-white px-10 my-10">
          <div className=" w-2/4 mr-7 text-[25px]">
            RESUMEN El siguiente proyecto se trata sobre una problemática muy
            común a nivel de empresas, esta problemática tiene que ver con la
            gestión y difusión de información de los mismos, ya que, sin
            importar el tamaño de una empresa, estos tratan de mantenerse
            competitivos y sobre todo mantener un nivel de información que le
            garantice la recuperación de la inversión y lógicamente una ganancia
            dentro de los rangos permisibles. <br /> La propuesta de solución
            planteada va a consistir en la creación y la implementación de una
            Página web con lenguaje de programación JavaScript utilizando
            también un lenguaje de etiquetas HTML y el lenguaje de estilos CSS,
            todo esto va a ser desarrollado de una forma en que la información
            de la empresa sea más accesible y fácil para los clientes a su vez
            dando información sobre los productos y servicios que ofrece la
            empresa. <br /> Para poder cumplir con ese propósito, se han
            requerido la utilización de tres herramientas esenciales al momento
            de crear esta pagina web, estas Herramientas son:
          </div>
          <div className=" w-2/4 ml-7 text-[25px]">
            <span className=" font-bold">Figma:</span> <br /> programa usado
            principalmente para poder diseñar el como se vera la pagina web,
            junto con sus componentes, siendo esencial al momento de mostrar el
            cómo quedaría el diseño de la página web. <br />
            <span className=" font-bold">Visual Studio Code:</span>
            <br /> El programa principal en la creación de la página, usada para
            la creación de códigos HTML y aplicación los estilos CSS es la
            herramienta mas esencial de todo este trabajo.
            <br />
            <span className=" font-bold">
              GitHub: <br />
            </span>
            una aplicación/pagina usada con la finalidad de compartir los
            últimos cambios realizados en el código de la página entre los
            miembros del equipo de trabajo. <br />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center my-20  w-full bg-secondary text-center text-white font-serif text-2xl justify-around">
        <p className="text-8xl mb-10">Integrantes</p>
        <div>
          <img className="h-[130px] rounded-3xl" src={integranteOne} alt="" />
          <p className="my-5">Jhon Godoy</p>
        </div>
        <div>
          <img className="h-[130px] rounded-3xl" src={integranteTwo} alt="" />
          <p className="my-5">Kevin Avila</p>
        </div>
        <div>
          <img className="h-[130px] rounded-3xl" src={integranteThree} alt="" />
          <p className="my-5">David Pozo</p>
        </div>
        <div>
          <img className="h-[130px] rounded-3xl" src={integranteFour} alt="" />
          <p className="my-5 text-center">Mateo Chacon</p>
        </div>
      </div>

      <a
        className="text-white text-3xl text-center flex justify-center items-center"
        href="https://pagina-estrual-version-2.vercel.app/"
      >
        Link De La Pagina
      </a>
      <div className="text-white h-15 w-[100px] text-center bg-primary flex justify-end items-end">
        <a href="https://pagina-de-link-de-imagenes.vercel.app/">
          Insertar Imagen
        </a>
      </div>
    </section>
  );
};

export default Main;
