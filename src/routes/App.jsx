import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Layout from "../container/Layout";
import Pruebas from "../pages/Pruebas";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="prueba" element={<Pruebas />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
