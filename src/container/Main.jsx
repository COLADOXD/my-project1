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
