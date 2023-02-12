import React from "react";

const Propuesta = () => {
  return (
    <section className="h-full bg-secundary">
      <h1 className="font-serif text-3xl text-center my-8 text-red-800">
        Propuesta
      </h1>
      <div className="flex flex-row mb-10">
        <p className="w-2/4 text-white font-sans mx-10 text-left text-[25px]">
          Las características de esta página web fueron creadas y agregadas
          pensando siempre en las preferencias del cliente y el personal: <br />{" "}
          Se adapta a celulares y computadoras. Permite visualizar la imagen con
          mayor tamaño simplemente haciendo click sobre ella. Cada imagen se
          agrupa en una categoría que puede ser accedida mediante el menú
          desplegable. <br /> ¿Como está compuesta? <br /> Está compuesta por un
          menú desplegable que contiene las diferentes categorías de los
          productos, imágenes de distintos productos de la empresa Estrual y el
          contacto de esta.
        </p>
        <div className="w-2/4 text-white font-sans mx-10 text-left text-[25px]">
          ¿Como fue desarrollada? <br /> A base del programa Visual Estudio
          Code, fue donde se hizo la mayor parte del trabajo, creando y
          manipulando el código HTML junto con los estilos CSS. <br /> ¿Cuál es
          la funcionalidad? <br /> Su funcionalidad es simple, dar a conocer los
          servicios y productos de la empresa Estrual Vidrio y Aluminio, de una
          forma sencilla y practica para cualquier persona. <br /> ¿Para quién
          está dirigida? <br /> Esta dirigido para las personas que requieran
          los servicios de la empresa ya sea en mantenimiento de vidrios o la
          instalación (Vidrios, aluminios, puertas y entre otros) de los
          productos.
        </div>
      </div>
      <div className="flex flex-row mb-10">
        <div className="w-2/4 text-white font-sans mx-10 text-left text-lg"></div>
      </div>
    </section>
  );
};

export default Propuesta;
