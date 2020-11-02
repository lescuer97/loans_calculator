import React, { useState, useMemo } from "react";

import calculator from "../../util/calculator";
import Table from "../pages/Table";
import ChartPie from "../charts/ChartPie";

const Mortgage = () => {
  const [wasm, setWasm] = useState(null);
  //TODO agregar checkbox de opciones de hipoteca para mejores opciones

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
    precio: "",
    prestamo: "",
    años: "",
    interes: "",
    email: "",
  });

  const [morti, setMorti] = useState(null);
  const [graphdat, setGraphdat] = useState(null);

  const { precio, prestamo, años, interes, email } = hip;

  const onChange = (e) => {
    setHip({
      ...hip,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      precio: hip.precio * 1,
      prestamo: hip.prestamo * 1,
      anos: hip.años * 1,
      interes: hip.interes * 1,
    };
    const date = Date.now();

    //normal data
    // const normalData = calculator(data);
    const normalData = wasm.mort_calculator(data);
    setMorti(normalData);
    const normalDataPop = normalData.pop();
    console.log(normalDataPop);

    // calculates data with less price same year and interest
    const data2 = data;
    data2.prestamo = data2.prestamo * 0.8;
    // const lessPrice = calculator(data2);
    const lessPrice = wasm.mort_calculator(data2);
    const lessPricePop = lessPrice.pop();
    console.log(lessPricePop);

    // calculates data with less years
    const data3 = data;
    data3.anos = data3.anos * 0.8;
    // const lessAnos = calculator(data3);
    const lessAnos = wasm.mort_calculator(data3);
    const lessAnosPop = lessAnos.pop();
    console.log(lessAnosPop);

    // calculates data with less of everything
    const data4 = data;
    data4.anos = data4.anos * 0.8;
    data4.interes = data4.interes * 0.8;
    data4.prestamo = data4.prestamo * 0.8;

    // const lessEvery = calculator(data4);
    const lessEvery = wasm.mort_calculator(data4);
    const lessEveryPop = lessEvery.pop();
    console.log(lessEveryPop);

    console.log(Date.now() - date);

    // setGraphdat([
    //   {
    //     name: "Amor Total",
    //     value: normalDataPop.pago_total_amor * 1,
    //   },
    //   {
    //     name: "Interes Total",
    //     value: normalDataPop.intereses_totales * 1,
    //   },
    // ]);
    // console.log(normalDataPop);
    // console.log(info);
  };
  return (
    <>
      <div className='max-w-sm border border-solid '>
        <form className='p-6 flex flex-col justify-center' onSubmit={onSubmit}>
          <h1 className='text-gray-800 font-semibold '> Calcula tu Hipoteca</h1>
          <div className='flex flex-col'>
            {/* <label htmlFor='name' className='hidden'>
              Full Name
            </label> */}
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
            {/* <label htmlFor='tel' className='hidden'>
              Number
            </label> */}
            <input
              type='number'
              name='prestamo'
              id='prestamo'
              value={prestamo}
              placeholder='cuanto pediras prestado?'
              onChange={onChange}
              className='w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none'
            />
          </div>
          <div className='flex flex-col'>
            {/* <label htmlFor='name' className='hidden'>
              Full Name
            </label> */}
            <input
              type='number'
              name='años'
              id='años'
              value={años}
              onChange={onChange}
              placeholder='Años de Hipoteca'
              className='w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none'
            />
          </div>
          <div className='flex flex-col'>
            {/* <label htmlFor='name' className='hidden'>
              Full Name
            </label> */}
            <input
              type='number'
              name='interes'
              id='interes'
              value={interes}
              onChange={onChange}
              placeholder='tasa de interes'
              className='w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none'
            />
          </div>

          <div className='flex flex-col mt-2'>
            {/* <label htmlFor='email' className='hidden'>
              Email
            </label> */}
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
          {/* 
          <button
            type='button'
            onClick={(e) => {
              e.preventDefault();

              // console.log("hello Workd", hi);
            }}
            className='md:w-64 bg-indigo-600 hover:bg-blue-dark text-white  text-center text-centerfont-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300'>
            WebAssembly
          </button> */}
        </form>
      </div>
      {/* <Table mort={morti} /> */}
      <div className='mt-4'>
        {/* <ChartPie /> */}
        {!graphdat ? <div></div> : <ChartPie graphdat={graphdat} />}
      </div>
      {/* {!morti ? <div></div> : <Table mort={morti} />} */}
    </>
  );
};

export default Mortgage;
