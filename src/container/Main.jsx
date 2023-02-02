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
          <div className=" w-2/4 mr-7">
            El siguiente proyecto se trata sobre la parte de una problemática
            muy común a nivel de empresas, dicha problemática tiene que ver con
            la gestión y difusión de información de los mismos,
            independientemente del tamaño de la empresa, esta trata de
            mantenerse competitiva y sobre todo mantener un nivel de información
            que le garantice la recuperación de la inversión y lógicamente una
            ganancia dentro de los rangos permisibles. La propuesta de solución
            planteada va a consistir en la creación y la implementación de una
            Página web con lenguaje de programación JavaScript utilizando
            también un lenguaje de etiquetas HTML y un lenguaje de estilos CSS,
            el cual va a ser desarrollado para que la información de la empresa
            sea más accesible y concisa para los clientes a su vez dando
            información sobre los productos y servicios que da la empresa. Para
            esto se ha de comenzar haciendo la estructura de la página usando
            las herramientas de Visual Studio Code, un programa que se utiliza
            para la creación de códigos HTML, además de aplicar las reglas de
            estilo CSS, con la implementación del “media querie” para añadir
            responsividad a la página, pero para tener una mejor idea de cómo
            queremos que quede nuestra página web, se utilizará el programa
            Figma, gracias a este programa podremos diseñar el cómo se verá.
            También se implementó el uso de GitHub, el cual es un medio usado
            para compartir los cambios realizados desde diferentes máquinas del
            código HTML entre los miembros del equipo.
          </div>
          <div className=" w-2/4 ml-7">
            <span className="text-xl font-bold">Tema:</span> <br /> -El tema a
            investigar es sobre la empresa Estrual y los servicios que ofrece,
            como también en cómo le afecta no tener una página web oficial que
            automatice sus servicios de forma virtual y concisa. <br />
            <span className="text-xl font-bold">Problemática:</span> <br /> -No
            ha tenido una página web, desde el momento en que entró en
            funcionamiento, por eso se está creando una página web, para poder
            automatizar los servicios que ofrece la empresa, de forma presencial
            o no presencial. <br />
            <span className="text-xl font-bold">
              Objetivo general: <br />
            </span>
            -Desarrollar una página web informativa para la empresa Estrual
            desarrollada por lenguaje de programación JavaScript para
            automatizar los servicios de la empresa. <br />
            <span className="text-xl font-bold">Objetivo específico:</span>
            <br />
            -Implementar un servicio automatizado para la empresa. Metodología
            -La página web será desarrollada mediante o siguiendo las bases de
            la metodología scrum. Resultados esperados: -Desarrollar destreza y
            habilidad mínimas con el lenguaje de programación JavaScript.
            Palabras clave -Página web, Empresa, Cuenca, Lenguaje JavaScript.
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
    </section>
  );
};

export default Main;
