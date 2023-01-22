import React from "react";

import trabajoGrupal from "../assets/beneficios-trabajo-en-equipo1.jpg";

const Main = () => {
  return (
    <section className="">
      <img className="w-full h-[400px]" src={trabajoGrupal} alt="" />
      <div className="px-10">
        <h1 className="font-serif text-3xl text-center my-8 text-red-800">
          Resumen
        </h1>
        <div className="flex flex-col lg:flex-row justify-around">
          <p className="text-white font-sans w-[600px] mr-5">
            El siguiente proyecto se trata sobre la parte de una problemática
            muy común a nivel de empresas, dicha problemática tiene que ver con
            la gestión y difusión de información de los mismos,
            independientemente del tamaño de la empresa, esta trata de
            mantenerse competitiva y sobre todo mantener un nivel de información
            que le garantice la recuperación de la inversión y lógicamente una
            ganancia dentro de los rangos permisibles. La propuesta de solución
            planteada va a consistir en la creación y la implementación de una
            Página web con lenguaje de programación JavaScript utilizando
            también un lenguaje de etiquetas HTML y un lenguaje de estilos CSS.
          </p>
          <p className="text-white font-sans w-[600px]">
            El cual va a ser desarrollado para que la información de la empresa
            sea más accesible y concisa para los clientes a su vez dando
            información sobre los productos y servicios que da la empresa. Para
            esto se ha de comenzar haciendo la estructura de la página usando
            las herramientas de Visual Studio Code, un programa que se utiliza
            para la creacion de codigos HTML, además de aplicar las reglas de
            estilo CSS, con la implementación del “media querie” para añadir
            responsividad a la página, pero para tener una mejor idea de cómo
            queremos que quede nuestra página web, se utilizará el programa
            Figma, gracias a este programa podremos diseñar el diseño de como se
            verá. También se implementará el uso de GitHub, el cual se usará
            como un medio para compartir los cambios realizados desde diferentes
            máquinas del código HTML entre los miembros del equipo
          </p>
        </div>
      </div>
    </section>
  );
};

export default Main;
