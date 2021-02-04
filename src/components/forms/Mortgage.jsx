import React, { useState, useContext, useEffect} from "react";
import { useHistory } from "react-router-dom";
//module
import converter from "../../util/converter";
import mort_calculator from "../../util/mort_calculator"; 
import data_procesor from '../../util/data_procesor';

// context
import ResultContext from "../../context/result/ResultContext";


const Mortgage = () => {
  let history = useHistory();
  const resultContext = useContext(ResultContext);
  const { post_results } = resultContext;

  const [wasm, setWasm] = useState(null);


  // para datos legible
  const [mortiData, setMortiData] = useState(null);
  const [prec, setPrec] = useState("100.000,00 €");

  // loads wasm to the app for calculation
  const loadedWasm = async () => {
    try {
      const pack = await import("workers");
      setWasm(pack);
    } catch (err) {
      setWasm(mort_calculator);
    }
  };
  //carga la libreria de wasm
  loadedWasm();

  const [hip, setHip] = useState({
    precio: 100000,
    años: 30,
    ahorro: 20000,
    interes: 2,
    email: "",
  });

  const { precio, ahorro, años, interes } = hip;

  // TODO PONER BOTONES PARA CREAR REPORTE
  const onChange = (e) => {
    setHip({
      ...hip,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const calculator = wasm.mort_calculator;
    const prestamoCalc = hip.precio - hip.ahorro;

    const data = {
      precio: hip.precio * 1,
      prestamo: prestamoCalc,
      anos: hip.años * 1,
      interes: (hip.interes * 1) / 100,
    };

    // Consejo de juan de usar el spread operator para shallow copy, juraria que la ultima vez no funciono :/
    const dataLessPrice = {...data};
    const dataLessAnos = {...data};
    const dataLessAnosPrice = {...data}; 

 
    //calculous with default data
    const ProcessedNormalData = data_procesor(calculator, data);
     // prettyfies the data for display 
    const PrettyNormalData = converter(ProcessedNormalData, hip.ahorro);

    // calculates data with 20% less loan amoun
    const ProcessedDataLessPrice = data_procesor(calculator, dataLessPrice,  dataLessPrice.prestamo, 0 ,  0.8 );
    // prettyfies the data for display 
    const lessPricePop = converter(ProcessedDataLessPrice, hip.ahorro);

    // calculates data with 20% less years
    const ProcessedDataLessAno = data_procesor(calculator, dataLessAnos, 0, dataLessAnos.anos, 0.8 );
    // prettyfies the data for display 
    const lessAnosPop = converter(ProcessedDataLessAno, hip.ahorro);

    // calculates data with 20% less years and loans
   const  ProcessedDataLessAnoPrice = data_procesor(calculator, dataLessAnosPrice, dataLessAnosPrice.prestamo, dataLessAnosPrice.anos, 0.8 );
   // prettyfies the data for display 
    const lessEveryPop = converter(ProcessedDataLessAnoPrice, hip.ahorro);

    // this sets the local state before sending to context 
    setMortiData([PrettyNormalData, lessPricePop, lessAnosPop, lessEveryPop]);
    setPrec(
      (hip.precio * 1).toLocaleString("es-ES", {
        style: "currency",
        currency: "EUR",
      })
    );

    //waits a little so the global state can load
    setTimeout(() => {
      history.push("/result");
    }, [50]);

  };

  //sends the local state to the global context
  useEffect(() => {
    post_results([
      mortiData,
      prec,
    ]);
  }, [
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
