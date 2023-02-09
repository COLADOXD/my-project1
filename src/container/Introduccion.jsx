import React from "react";
import Grupal from "../assets/trabajo-en-equipo-social.jpg";

const Introduccion = () => {
  return (
    <section className="h-full bg-secundary">
      <img className="w-full h-[400px]" src={Grupal} alt="" />

      <h1 className="font-serif text-3xl text-center my-8 text-red-800">
        Justificacion
      </h1>
      <p className="   text-white font-sans mx-10 text-left text-[25px]">
        La empresa Estrual debido a que carece de una página web hace que sus
        servicios no puedan presentarse de forma más personalizada y detallada.
        Aunque el aumento del uso de redes sociales hace que una página web sea
        prescindible, estas redes no permiten la personalización y el detalle
        que puede otorgar una página web, la página web puede presentar el
        contenido de forma concisa y directa al usuario.
      </p>
      <div className=" text-white font-sans mx-10 text-left text-lg p-0">
        <h1 className="font-serif text-3xl text-center my-8 text-red-800">
          Formulacion del problema
        </h1>
        <p className="w-full text-[25px]">
          El objetivo de este proyecto trata sobre la creación de una página web
          informativa empresarial Estrual, como una forma de automatizar los
          servicios de esta empresa ofrece a la clientela, ya que desde el
          momento de su fundación la empresa no ha visto la necesidad de la
          creación de un sitio web, ya que lo ha visto como innecesaria a la vez
          de un gasto de presupuesto para tan solo mantenerla en funcionamiento.
          En la actualidad han tenido problemas con la falta de empleo por la
          cuarentena, problemas que otras empresas similares no tuvieron, ya que
          contaban ya con una página web. Por lo tanto, han optado por la
          creación de su propia página web, que es donde por se pondrán los
          servicios que la empresa tiene para ofrecer, ya sean el de
          mantenimiento, instalación o fabricación de productos de aluminio y
          vidrios.
        </p>
      </div>
      <div className="flex flex-row mb-10">
        {/* <p className="w-2/4 text-white font-sans mx-10 text-left text-lg">
          Este, logrará que la empresa mejore la calidad atención y ventas,
          generados y sitio web de la empresa. -Nacional: Desarrollo e
          implementación de una página web con Chatbot, para el proceso de
          solicitud de exámenes de laboratorio de la empresa “SANLAC S.A.”
          (Sánchez Díaz, 2021) Analizo las necesidades respecto al proceso de
          consulta de exámenes, identificando los servicios más solicitados por
          parte de los clientes, donde se diseña mediante diagramas de casos de
          uso, los procesos y participantes que intervienen en el modelo de
          negocio de la entidad médica, donde se crea el sitio web. -Local:
          Creación de la página web para la Carrera de Comunicación de la
          Universidad Politécnica Salesiana sede Cuenca (Ortiz Siguencia, 2020)
          El documento consiste en la creación de una página web para la Carrera
          de Comunicación. El mismo que tiene como objetivo llegar a todo
          público teniendo como base información elemental y necesaria como
          contenidos multimedia, académicos y de investigación. por la publicidad de las redes sociales, posicionamiento en
          buscadore
        </p> */}
      </div>
    </section>
  );
};

export default Introduccion;
