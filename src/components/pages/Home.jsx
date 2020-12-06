import React from "react";
import Chevron from "../../util/Chevron";
import Mortgage from "../forms/Mortgage";
const Home = () => {
  return (
    <div className="flex flex-col  ">
      <div className="place-self-center  mb-6">
        <h1 className="text-gray-800 font-semibold text-3xl md:text-5xl ">
          {" "}
          Calcula tu Hipoteca
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center md:mx-4 md:space-x-12 md:space-y-0   ">
        <div className=" border border-solid p-5 shadow-lg divide-y divide-gray-400">
          <p className="text-center pb-12 text-xl mt-2">
            Esta calculadora dara <span className="text-2xl"> 4</span> <br />{" "}
            resultados distintos{" "}
          </p>

          <ol className="list-inside space-y-16 list-decimal  ">
            <li className="text-lg  mt-12">Los datos aportados</li>
            <li className="text-lg">20% mas ahorro</li>
            <li className="text-lg">20% menos tiempo de hipoteca</li>
            <li className="text-lg ">
              20% mas ahorro y menos tiempo de hipoteca{" "}
            </li>
          </ol>
        </div>
        <Chevron />
        <Mortgage />
      </div>
    </div>
  );
};

export default Home;
