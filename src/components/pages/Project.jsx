import React from "react";
import { Helmet } from "react-helmet";

const Project = () => {
  return (
    <div className="flex flex-row justify-center">
      <Helmet>
        <meta
          charSet="utf-8"
          name="Projecto"
          content="Calculadora de hipoteca"
        />
        <meta name="author" content="Leonardo Escuer" />
        <title>El projecto</title>
      </Helmet>

      <div className="flex flex-col border border-solid border-gray-400 py-8 px-4 max-w- xl shadow-lg text-xl">
        <p>Hello!, this is a project page for practice.</p>
        <ul className="mt-2 list-inside list-disc ">
          Las Tecnologias utulizadas son:
          <li>React y Vanilla Javascript</li>
          <li>TailwindCSS</li>
          <li>WebAssembly (Rust Lang)</li>
        </ul>

        <p className="mt-2">
          Estoy consiente que todavia necesito mejorar mis habilidades de
          diseño. <br />
          Pero si ido mejorando y eso es lo importante jajaja.
        </p>
      </div>
    </div>
  );
};

export default Project;
