import React, { useState, useContext, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";

import _ from "lodash";
import ResultContext from "../../context/result/ResultContext";


import converter from "../../util/converter";


const Mortgage = () => {
  let history = useHistory();
  const resultContext = useContext(ResultContext);
  const { post_results } = resultContext;

  const [wasm, setWasm] = useState(null);

  // // for entire data table
  // const [mortiTable, setMortiTable] = useState(null);

  // para datos legible
  const [mortiData, setMortiData] = useState(null);

  // para grafico

  const [dat, setDat] = useState(null);

  const [prec, setPrec] = useState("100.000,00 €");

  // loads wasm to the app for calculation
  const loadedWasm = async () => {
    try {
      const pack = await import("workers");
      setWasm(pack);
    } catch (err) {
      console.log("couldn't import wasm");
    }
  };

  loadedWasm();

  const [hip, setHip] = useState({
    precio: 100000,
    años: 30,
    ahorro: 20000,
    interes: 2,
    email: "",
  });

  const { precio, ahorro, años, interes, email } = hip;

  // TODO PONER BOTONES PARA CREAR REPORTE
  const onChange = (e) => {
    setHip({
      ...hip,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // setGraphdat(null);
    setMortiData(null);
    setPrec(null);

    if (hip.precio === "0" && hip.ahorro > hip.precio) {
      console.log("Error!");
      return;
    }

    const prestamoCalc = hip.precio - hip.ahorro;
    // console.log("prestamo Calc: ",prestamoCalc);

    const data = {
      precio: hip.precio * 1,
      prestamo: prestamoCalc,
      anos: hip.años * 1,
      interes: (hip.interes * 1) / 100,
    };

    //normal data
    // const normalData = calculator(data);
    const normalData = wasm.mort_calculator(data);
    // console.log(normalData);

    // this is to not affect the original array so it's completed
    const graphNormalData = _.clone(normalData).pop();
    const normalDataPop = converter(_.clone(graphNormalData), hip.ahorro);

    // calculates data with less price same year and interest
    const data2 = _.clone(data);
    data2.prestamo = data2.prestamo * 0.8;
    // const lessPrice = calculator(data2);
    const lessPrice = wasm.mort_calculator(data2);
    // console.log(lessPrice);

    // this is to not affect the original array so it's completed
    const graphLessPrice = _.clone(lessPrice).pop();
    const lessPricePop = converter(_.clone(graphLessPrice), hip.ahorro);

    // calculates data with less years
    const data3 = _.clone(data);
    data3.anos = data3.anos * 0.8;
    // const lessAnos = calculator(data3);
    const lessAnos = wasm.mort_calculator(data3);

    // this is to not affect the original array so it's completed
    const graphLessAnos = _.clone(lessAnos).pop();
    const lessAnosPop = converter(_.clone(graphLessAnos), hip.ahorro);

    // calculates data with less of everything
    const data4 = _.clone(data);
    data4.anos = data4.anos * 0.8;
    data4.prestamo = data4.prestamo * 0.8;
    // const lessEvery = calculator(data4);
    const lessEvery = wasm.mort_calculator(data4);

    // this is to not affect the original array so it's completed
    const graphLessEvery = _.clone(lessEvery).pop();

    const lessEveryPop = converter(_.clone(graphLessEvery), hip.ahorro);
    lessEveryPop.balance = lessEveryPop.balance.toLocaleString("es-ES", {
      style: "currency",
      currency: "EUR",
    });

    setPrec(
      (hip.precio * 1).toLocaleString("es-ES", {
        style: "currency",
        currency: "EUR",
      })
    );
   

    // This is for the final data
    setMortiData([normalDataPop, lessPricePop, lessAnosPop, lessEveryPop]);
    setDat([graphNormalData, graphLessPrice, graphLessPrice, graphLessEvery]);
    setTimeout(() => {
      history.push("/result");
    }, [50]);
  };
  useEffect(() => {
    post_results([
      // graphdat,
      mortiData,
      prec,
    ]);
  }, [
    // graphdat,
    mortiData,
    prec,
  ]);

  return (
    <>
      <div className="md:w-2/5 max-w-sm border border-solid shadow-lg  place-self-center min-w-full md:min-w-0">
        <form className="p-4 flex flex-col justify-center" onSubmit={onSubmit}>
          <div className="flex flex-col">
            <label
              className="block text-gray-700 text-sm font-bold " 
              htmlFor=""
            >
              Precio del inmueble
            </label>
            <input
              type="number"
              name="precio"
              id="precio"
              value={precio}
              onChange={onChange}
              placeholder="precio de casa"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
            />

            <input
              type="range"
              min={0}
              max={2000000}
              step={10000}
              name="precio"
              id="precio"
              value={precio}
              placeholder="cuanto pediras prestado?"
              onChange={onChange}
              className=""
            />
          </div>

          <div className="flex flex-col mt-2">
            <label
              className="block text-gray-700 text-sm font-bold "
              htmlFor=""
            >
              Ahorro Aportado
            </label>

            <div className=" flex flex-row mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700   focus:border-indigo-500 focus:outline-none">
              <input
                type="number"
                min={0}
                max={2000000}
                name="ahorro"
                id="ahorro"
                value={ahorro}
                placeholder="cuanto pediras prestado?"
                onChange={onChange}
                className="text-gray-800 font-semibold w-4/5"
              />
              <p className="w-1/5 text-right">
                {((ahorro * 100) / precio).toFixed(2)}%
              </p>
            </div>

            <input
              type="range"
              min={0}
              max={precio}
              step={1000}
              name="ahorro"
              id="ahorro"
              value={ahorro}
              onChange={onChange}
              className=""
            />
          </div>
          <div className="flex flex-col">
            <label
              className="block text-gray-700 text-sm font-bold "
              htmlFor=""
            >
              Años de la Hipoteca
            </label>
            <input
              type="number"
              name="años"
              id="años"
              value={años}
              onChange={onChange}
              placeholder="Años de Hipoteca"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
            />
            <input
              type="range"
              min={0}
              max={100}
              step={1}
              name="años"
              id="años"
              value={años}
              onChange={onChange}
              className=""
            />
          </div>
          <div className="flex flex-col">
            <label
              className="block text-gray-700 text-sm font-bold "
              htmlFor=""
            >
              Tasa de Interes
            </label>
            <input
              type="number"
              name="interes"
              id="interes"
              value={interes}
              onChange={onChange}
              placeholder="tasa de interes"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
            />
            <input
              type="range"
              min={0}
              max={25}
              step={0.1}
              name="interes"
              id="interes"
              value={interes}
              onChange={onChange}
              className=""
            />
          </div>

          <button
            type="submit"
            className="md:w-2/4 place-self-center bg-indigo-600 hover:bg-blue-dark text-white font-bold text-lg py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 "
          >
            Calcular
          </button>
        </form>
      </div>
    </>
  );
};

export default Mortgage;
