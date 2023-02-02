import React from "react";
import Grupal2 from "../assets/Businessman showing computer screen to coworkers in creative office-541041-edited.webp";

const Objetivos = () => {
  return (
    <section className="h-full bg-secundary">
      <img className="w-full h-[400px]" src={Grupal2} alt="" />

      <h1 className="font-serif text-3xl text-center my-8 text-red-800">
        Objetivos De la investigacion
      </h1>
      <div className="flex flex-row mb-10">
        <p className="w-2/4 text-white font-sans mx-10 text-left text-lg">
          El objetivo general que se busca implementar es el de crear una página
          web para la empresa Estrual. Donde esta pueda presentar los servicios
          que la empresa ofrece a sus clientes de forma concisa. Demostrando así
          la utilidad que puede ofrecer una página web. Mientras que los
          objetivos específicos, son los de implementar un sistema de
          automatizado para la empresa, además que gracias a esto se obtendrá un
          incremento en las habilidades de programación de una página web. Se
          usará también el proceso metodológico, donde se hará un trabajo de
          investigación acerca de distintas páginas web informáticas, y así
          aplicar el mejor modelo de presentación, sin que se salga de la
          esencia de la empresa. Los Objetivos <br /> Objetivo General <br />
        </p>
        <div className="w-2/4 text-white font-sans mx-10 text-left text-lg">
          <li>
            Crear una página web para la empresa Estrual Objetivo Específicos
          </li>
          <li>Obtener más conocimientos en base de datos</li>
          <li>Aprender a programar con HTML e implementar los estilos CSS</li>
          <li>Mejorar el nivel de investigación</li>
          <li>Mejorar el manejo de computadoras</li>
          <li>
            Aumentar las habilidades de programación a través de los códigos de
            JavaScript
          </li>
          <li>
            Presentar los servicios de la empresa de forma concisa. Demostrar la
            utilidad de una página web.
          </li>
        </div>
      </div>
      <div className="flex flex-row mb-10">
        <div className="w-2/4 text-white font-sans mx-10 text-left text-lg">
          <h1 className="font-serif text-3xl text-center my-8 text-red-800">
            JUSTIFICACION
          </h1>
          <p>
            La empresa Estrual debido a que carece de una página web hace que
            sus servicios no puedan presentarse de forma más personalizada y
            detallada. Aunque el aumento del uso de redes sociales hace que una
            página web sea prescindible, estas redes no permiten la
            personalización y el detalle que puede otorgar una página web, la
            página web puede presentar el contenido de forma concisa y directa
            al usuario.
          </p>
        </div>
        <div className="w-2/4 text-white font-sans mx-10 text-left text-lg p-0">
          <h1 className="font-serif text-3xl text-center my-8 text-red-800">
            FORMULACION DEL PROBLEMA
          </h1>
          <p className="w-full">
            El objetivo de este proyecto trata sobre la creación de una página
            web informativa empresarial Estrual, como una forma de automatizar
            los servicios de esta empresa ofrece a la clientela, ya que desde el
            momento de su fundación la empresa no ha visto la necesidad de la
            creación de un sitio web, ya que lo ha visto como innecesaria a la
            vez de un gasto de presupuesto para tan solo mantenerla en
            funcionamiento. En la actualidad han tenido problemas con la falta
            de empleo por la cuarentena, problemas que otras empresas similares
            no tuvieron, ya que contaban ya con una página web. Por lo tanto,
            han optado por la creación de su propia página web, que es donde por
            se pondrán los servicios que la empresa tiene para ofrecer, ya sean
            el de mantenimiento, instalación o fabricación de productos de
            aluminio y vidrios.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Objetivos;
