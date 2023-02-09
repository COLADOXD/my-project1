import React from "react";
import Primero from "../assets/1img.jpg";
import Segundo from "../assets/2img.jpg";
import Tercero from "../assets/3img.jpg";
import Cuarto from "../assets/4img.jpg";
import Quinto from "../assets/5img.jpg";

const Encuesta = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className=" w-[800px] flex flex-col  text-center">
        <h1 className="font-serif text-3xl text-center my-8 text-red-800">
          Encuesta
        </h1>
        <p className=" text-white font-sans mb-8 text-[25px]">
          Al momento de hacer esta página web, se ha realizado una encuesta al
          personal de la Empresa Estrual, en donde se ha planteado varias
          preguntas con el propósito si es factible realizar este proyecto.
        </p>
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="mr-5">
          <img className="w-[510px] m-4 rounded-xl" src={Primero} alt="" />
          <img className="w-[510px] m-4 rounded-xl" src={Segundo} alt="" />
          <img className="w-[510px] m-4 rounded-xl" src={Tercero} alt="" />
        </div>
        <div className="ml-5">
          <img className="w-[510px] m-4 rounded-xl" src={Cuarto} alt="" />
          <img className="w-[510px] m-4 rounded-xl" src={Quinto} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Encuesta;
