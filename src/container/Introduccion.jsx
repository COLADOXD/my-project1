import React from "react";
import Grupal from "../assets/trabajo-en-equipo-social.jpg";

const Introduccion = () => {
  return (
    <section className="h-full bg-secundary">
      <img className="w-full h-[400px]" src={Grupal} alt="" />
      <h1 className="font-serif text-3xl text-center my-8 text-red-800">
        Introduccion
      </h1>
      <div className="grid grid-cols-3 px-10">
        <p className="1fr text-white font-sans">
          El siguiente proyecto se trata sobre la parte de una problemática muy
          común a nivel de empresas, dicha problemática tiene que ver con la
          gestión y difusión de información de los mismos, independientemente
          del tamaño de la empresa, esta trata de mantenerse competitiva y sobre
          todo mantener un nivel de información que le garantice la recuperación
          de la inversión y lógicamente una ganancia dentro de los rangos
          permisibles.
        </p>
        <p className="1fr text-white font-sans mx-10">
          La propuesta de solución planteada va a consistir en la creación y la
          implementación de una Página web con lenguaje de programación
          JavaScript utilizando también un lenguaje de etiquetas HTML y un
          lenguaje de estilos CSS, el cual va a ser desarrollado para que la
          información de la empresa sea más accesible y concisa para los
          clientes a su vez dando información sobre los productos y servicios
          que da la empresa.
        </p>
        <p className="1fr text-white font-sans">
          Para esto se ha de comenzar haciendo la estructura de la página usando
          las herramientas de Visual Studio Code, un programa que se utiliza
          para la creación de códigos HTML, además de aplicar las reglas de
          estilo CSS, con la implementación del “media querie” para añadir
          responsividad a la página, pero para tener una mejor idea de cómo
          queremos que quede nuestra página web, se utilizará el programa Figma,
          gracias a este programa podremos diseñar el cómo se verá. También se
          implementó el uso de GitHub, el cual es un medio usado para compartir
          los cambios realizados desde diferentes máquinas del código HTML entre
          los miembros del equipo.
        </p>
      </div>
      <div className="grid grid-cols-2 text-center gap-6 px-36 py-10">
        <div className="">
          <h1 className="font-serif text-3xl text-center my-8 text-red-800">
            FORMULACION DEL PROBLEMA
          </h1>
          <p className="1fr text-white font-sans mx-10 text-left">
            El objetivo de este proyecto trata sobre la creación de una página
            web informativa empresarial Estrual, como una forma de automatizar
            los servicios de esta empresa ofrece a la clientela, ya que desde el
            momento de su fundación la empresa no ha visto la necesidad de la
            creación de un sitio web, ya que lo ha visto como innecesaria a la
            vez de un gasto de presupuesto para tan solo mantenerla en
            funcionamiento. En la actualidad han tenido problemas con la falta
            de empleo por la cuarentena, problemas que otras empresas similares
            no tuvieron, ya que contaban ya con una página web.
          </p>
        </div>
        <div>
          <h1 className="font-serif text-3xl text-center my-8 text-red-800">
            JUSTIFICACION
          </h1>
          <p className="1fr text-white font-sans mx-10 text-left">
            La empresa Estrual debido a que carece de una página web hace que
            sus servicios no puedan presentarse de forma más personalizada y
            detallada. Aunque el aumento del uso de redes sociales hace que una
            página web sea prescindible, estas redes no permiten la
            personalización y el detalle que puede otorgar una página web, la
            página web puede presentar el contenido de forma concisa y directa
            al usuario.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduccion;
