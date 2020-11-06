import React, { useState, useMemo } from "react";
import _ from "lodash";
import calculator from "../../util/calculator";
import Table from "../pages/Table";
import ChartPie from "../charts/ChartPie";

const Mortgage = () => {
  const [wasm, setWasm] = useState(null);
  // for entire data table
  const [mortiTable, setMortiTable] = useState(null);

  // para datos legible
  const [mortiData, setMortiData] = useState(null);

  // para grafico
  const [graphdat, setGraphdat] = useState(null);

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
    interes: 3,
    email: "",
  });

  const { precio, ahorro, años, interes, email } = hip;

  const onChange = (e) => {
    setHip({
      ...hip,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //TODO agregar que el ahorro no puede ser mas que el precio

    const prestamoCalc = hip.precio - hip.ahorro;
    const data = {
      precio: hip.precio * 1,
      prestamo: prestamoCalc,
      anos: hip.años * 1,
      interes: hip.interes * 1,
    };

    //normal data
    // const normalData = calculator(data);
    const normalData = wasm.mort_calculator(data);

    const normalDataPop = normalData.pop();

    // calculates data with less price same year and interest
    const data2 = _.clone(data);
    data2.prestamo = data2.prestamo * 0.8;
    // const lessPrice = calculator(data2);
    const lessPrice = wasm.mort_calculator(data2);
    const lessPricePop = lessPrice.pop();

    // calculates data with less years

    const data3 = _.clone(data);
    data3.anos = data3.anos * 0.8;
    // const lessAnos = calculator(data3);
    const lessAnos = wasm.mort_calculator(data3);
    const lessAnosPop = lessAnos.pop();
    console.log(lessAnosPop);

    // calculates data with less of everything
    const data4 = _.clone(data);
    data4.anos = data4.anos * 0.8;
    data4.prestamo = data4.prestamo * 0.8;
    // const lessEvery = calculator(data4);
    const lessEvery = wasm.mort_calculator(data4);
    const lessEveryPop = lessEvery.pop();

    // This is for the graphs
    setGraphdat([
      [
        { name: "Amor Total", value: normalDataPop.pago_total_amor * 1 },
        {
          name: "Interes Total",
          value: normalDataPop.intereses_totales * 1,
        },
      ],
      [
        { name: "Amor Total", value: lessPricePop.pago_total_amor * 1 },
        {
          name: "Interes Total",
          value: lessPricePop.intereses_totales * 1,
        },
      ],
      [
        { name: "Amor Total", value: lessAnosPop.pago_total_amor * 1 },
        {
          name: "Interes Total",
          value: lessAnosPop.intereses_totales * 1,
        },
      ],
      [
        { name: "Amor Total", value: lessEveryPop.pago_total_amor * 1 },
        {
          name: "Interes Total",
          value: lessEveryPop.intereses_totales * 1,
        },
      ],
    ]);
    // This is for the final data
    setMortiData([normalDataPop, lessPricePop, lessAnosPop, lessEveryPop]);
  };
  return (
    <>
      <div className='max-w-sm border border-solid '>
        <form className='p-6 flex flex-col justify-center' onSubmit={onSubmit}>
          <h1 className='text-gray-800 font-semibold '> Calcula tu Hipoteca</h1>
          <div className='flex flex-col'>
            <label
              className='block text-gray-700 text-sm font-bold '
              htmlFor=''>
              Precio del inmueble
            </label>
            <input
              type='number'
              name='precio'
              id='precio'
              value={precio}
              onChange={onChange}
              placeholder='precio de casa'
              className='w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none'
            />
          </div>

          <div className='flex flex-col mt-2'>
            <label
              className='block text-gray-700 text-sm font-bold '
              htmlFor=''>
              Ahorro Aportado
            </label>
            <input
              type='number'
              min={0}
              max={precio}
              name='ahorro'
              id='ahorro'
              value={ahorro}
              placeholder='cuanto pediras prestado?'
              onChange={onChange}
              className='w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none'
            />

            <input
              type='range'
              min={0}
              max={precio}
              step={10000}
              name='ahorro'
              id='ahorro'
              value={ahorro}
              placeholder='cuanto pediras prestado?'
              onChange={onChange}
              className='w-100  py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none'
            />
          </div>
          <div className='flex flex-col'>
            <label
              className='block text-gray-700 text-sm font-bold '
              htmlFor=''>
              Años de la Hipoteca
            </label>
            <input
              type='number'
              name='años'
              id='años'
              value={años}
              onChange={onChange}
              placeholder='Años de Hipoteca'
              className='w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none'
            />
            <input
              type='range'
              min={0}
              max={100}
              step={1}
              name='años'
              id='años'
              value={años}
              onChange={onChange}
              className='w-100  py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none'
            />
          </div>
          <div className='flex flex-col'>
            <label
              className='block text-gray-700 text-sm font-bold '
              htmlFor=''>
              Tasa de Interes
            </label>
            <input
              type='number'
              name='interes'
              id='interes'
              value={interes}
              onChange={onChange}
              placeholder='tasa de interes'
              className='w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none'
            />
            <input
              type='range'
              min={0}
              max={30}
              step={1}
              name='interes'
              id='interes'
              value={interes}
              onChange={onChange}
              className='w-100  py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none'
            />
          </div>

          <div className='flex flex-col mt-2'>
            <label
              className='block text-gray-700 text-sm font-bold '
              htmlFor=''>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Email'
              value={email}
              onChange={onChange}
              className='w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none'
            />
          </div>

          <button
            type='submit'
            className='md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300'>
            Submit
          </button>
        </form>
      </div>

      <div className='mt-4 flex flex-row'>
        <div>
          {!graphdat ? (
            <div></div>
          ) : (
            <>
              <p className='h3 text-center '>Normal Data</p>
              <ChartPie
                graphdat={graphdat[0]}
                mortiData={mortiData[0]}
                precio={hip.precio}
              />
            </>
          )}
        </div>
        <div>
          {!graphdat ? (
            <div></div>
          ) : (
            <>
              <h3 className='h3 text-center '>Less loan amount</h3>{" "}
              <ChartPie
                graphdat={graphdat[1]}
                mortiData={mortiData[1]}
                precio={hip.precio}
              />{" "}
            </>
          )}
        </div>
        <div className=''>
          {!graphdat ? (
            <div></div>
          ) : (
            <>
              {" "}
              <h3 className='h3 text-center '>Less years of mortgage</h3>{" "}
              <ChartPie
                graphdat={graphdat[2]}
                mortiData={mortiData[2]}
                precio={hip.precio}
              />
            </>
          )}
        </div>
        <div className=''>
          {!graphdat ? (
            <div></div>
          ) : (
            <>
              <h3 className='h3 text-center '>
                Less loan amount and less years
              </h3>{" "}
              <ChartPie
                graphdat={graphdat[3]}
                mortiData={mortiData[3]}
                precio={hip.precio}
              />{" "}
            </>
          )}
        </div>
      </div>
      {/* {!mortiTable ? <div></div> : <Table mort={mortiTable} />} */}
    </>
  );
};

export default Mortgage;
