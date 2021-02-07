import React from "react";

// TODO ADD ANIMATION
const ResultItem = (props) => {

  let {
    pago_mensual,
    gasto_total,
  } = props.mortiData;

  return (
    <div className="flex flex-col py-1 ">
      <div className="mb-2 px-5">
        <p className="text-center">Esta es tu cuota:</p>
        <h1 className="text-center text-2xl lg:text-3xl text-green-500">
          <strong className="">{pago_mensual}</strong> / mes
        </h1>
      </div>
      <div className="mb-1">
        <p className="text-center">Terminarias Pagando por la casa:</p>
        <h1 className="text-center text-2xl lg:text-3xl">
          <strong className="text-red-500">{gasto_total}</strong>
        </h1>
      </div>

    </div>
  );
};

export default ResultItem;
