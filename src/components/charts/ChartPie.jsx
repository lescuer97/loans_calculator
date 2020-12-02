import React, { useMemo, useEffect } from "react";
// import { PieChart, Pie, Cell, Legend, Tooltip,  BarChart, Bar,  XAxis, YAxis, CartesianGrid } from "recharts";
// TODO ADD ANIMATION
const ChartPie = (props) => {
  // useEffect(() => {})

  const data = useMemo(() => props.graphdat, [props.graphdat]);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  let {
    balance,
    pago_mensual,
    gasto_total,
    pago_total_amor,
    intereses_totales,
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

export default ChartPie;
