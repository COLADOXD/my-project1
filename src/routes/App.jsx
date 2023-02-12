import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../container/Main";
import Layout from "../container/Layout";
import Encuesta from "../container/Encuesta";
import MarcoDeReferencia from "../container/MarcoDeReferencia";
import Introduccion from "../container/Introduccion";
import Objetivos from "../container/Objetivos";
import Metodologial from "../container/Metodologial";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Encuesta" element={<Encuesta />}></Route>
          <Route
            path="/MarcoDeReferencia"
            element={<MarcoDeReferencia />}
          ></Route>
          <Route path="/Introduccion" element={<Introduccion />}></Route>
          <Route path="/Objetivos" element={<Objetivos />}></Route>
          <Route path="/Metodologial" element={<Metodologial />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
