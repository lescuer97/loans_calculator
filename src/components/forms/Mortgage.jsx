import React, { useState } from "react";
import calculator from "../../util/calculator";

const Mortgage = () => {
  const [hip, setHip] = useState({
    precio: "",
    prestamo: "",
    años: "",
    interes: "",
    email: "",
  });
  const [done, setDone] = useState(false);

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
      años: hip.años * 1,
      interes: hip.interes * 1,
    };

    const total = calculator(data);
    console.log(total);
  };
  return (
    <div className='max-w-sm'>
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

        <button
          type='button'
          onClick={(e) => {
            e.preventDefault();

            // let hi = wasm.add(2, 5);
            // console.log("hello Workd", hi);
          }}
          className='md:w-64 bg-indigo-600 hover:bg-blue-dark text-white  text-center text-centerfont-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300'>
          WebAssembly
        </button>
      </form>
    </div>
  );
};

export default Mortgage;
