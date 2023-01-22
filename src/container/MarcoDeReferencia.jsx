import React from "react";
import Ultimo from "../assets/ja.jpg";

const MarcoDeReferencia = () => {
  return (
    <section>
      <img className="w-full h-[400px]" src={Ultimo} alt="" />
      <div className="flex flex-row px-10">
        <div className="mx-4">
          <h1 className="font-serif text-3xl text-center my-8 text-red-800">
            MARCO DE REFERENCIA
          </h1>
          <p className=" text-white font-sans mb-8">
            Las instituciones empresariales acorde con los años, van
            evolucionando en el mercado mundial brindando bienes o servicios
            basados en estándares de calidad internacionales, por ende,
            necesitan el uso de la tecnología para realizar sus procesos a mayor
            velocidad y precisión, otorgando esta manera una mejor eficacia en
            la atención dedicada a sus clientes.
            <br />
            <br />
            Tomando en cuenta esta situación, se elaboró un conjunto de eventos
            parametrizables en beneficio de la Empresa, procediendo con: la
            elección de una herramienta de desarrollo óptima para la creación
            del sistema.
          </p>
        </div>
        <div className="mx-4">
          <h1 className="font-serif text-3xl text-center my-8 text-red-800">
            MARCO CONTEXTUAL
          </h1>
          <p className=" text-white font-sans mb-8">
            esde el momento en que entro en funcionamiento la empresa no ha
            visto necesario la creación o implementación de una pagina web, ya
            que se consideraba innecesario, ya que en Ecuador no se veía la
            utilidad de tenerlas, eso fue hasta hace poco cuando se dio la
            pandemia y tuvieron que ser creativos para no estar en la banca
            rota, eso se logro gracias al uso de las redes sociales, sabiendo
            esto aceptaron la idea de la creación de esta página con el
            propósito de dar a conocer sus servicios de una forma más concisa.
          </p>
        </div>
        <div className="mx-4">
          <h1 className="font-serif text-3xl text-center my-8 text-red-800">
            MARCO CONCEPTUAL
          </h1>
          <p className=" text-white font-sans mb-8">
            Para proceder con la ejecución del presente proyecto se estableció
            un análisis de herramientas tecnológicas software siendo estas:
            Visual Estudio Code con el programa donde se ara la creación de la
            página web, GitHup un sitio web y aplicación que tienen como función
            el de compartir las modificaciones que se hace al archivo base, y
            Figma el programa donde se realizara el diseño del sitio web.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarcoDeReferencia;
