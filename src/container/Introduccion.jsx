import React from "react";
import Grupal from "../assets/trabajo-en-equipo-social.jpg";

const Introduccion = () => {
  return (
    <section className="h-full bg-secundary">
      <img className="w-full h-[400px]" src={Grupal} alt="" />

      <h1 className="font-serif text-3xl text-center my-8 text-red-800">
        Diagnostico
      </h1>
      <div className="flex flex-row mb-10">
        <p className="1fr text-white font-sans mx-10 text-left text-lg">
          Descripción del contexto: -El siguiente proyecto que se va a realizar
          se trata de una página web informativa empresarial Estrual, como una
          forma de automatizar los servicios de esta. Tiempo: -Desde el momento
          de su fundación la empresa no ha sido del todo reconocida, ya que no
          se ha adaptado a los cambios modernos del internet, con esta página
          web se busca promocionar sus servicios. Espacio: -Nacional: hay
          diversas empresas que ofrecen el mismo servicio y que cuenta con una
          página web. -Local: no hay mucha clientela que busque los servicios
          que ofrece en parte debido a que son desconocidos. -Internacional:
          Implementación de un plan marketing digital para incrementar el nivel
          ventas en una empresa de transporte interprovincial del Perú (Machaca
          Cornejo, 2018) Plan de marketing digital para incrementar el nivel de
          ventas en una empresa de transporte interprovincial del Perú.
        </p>
        <p className="1fr text-white font-sans mx-10 text-left text-lg">
          Este, logrará que la empresa mejore la calidad atención y ventas,
          generado por la publicidad de las redes sociales, posicionamiento en
          buscadores y sitio web de la empresa. -Nacional: Desarrollo e
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
          contenidos multimedia, académicos y de investigación.
        </p>
      </div>
    </section>
  );
};

export default Introduccion;
