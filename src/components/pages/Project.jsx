import React from "react";

const Project = () => {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col border border-solid border-gray-400 p-8 max-w-lg shadow-lg text-xl">
        <p>Hello!, this is a project page for practice.</p>
        <p className="mt-2">
          Utilizo React, tailwindcss y Rust/wasm para que esta sencilla
          calculadora.{" "}
        </p>{" "}
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
