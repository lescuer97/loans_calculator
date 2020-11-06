import React, { useMemo } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

// TODO ADD ANIMATION
const ChartPie = (props) => {
  const data = useMemo(() => props.graphdat, [props.graphdat]);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  let pago = data[0].value + data[1].value;

  let { balance, pago_mensual } = props.mortiData;
  // const { precio } = props.precio;
  return (
    <div className='flex flex-col'>
      <ul className=' flex flex-col'>
        <li>
          <strong>Tu cuota mensual:</strong> <span>{pago_mensual} €</span>
        </li>
        <li>
          {" "}
          <strong>Precio:</strong> <span>{props.precio} €</span>
        </li>
      </ul>

      <PieChart width={400} height={300}>
        <Pie dataKey='value' data={data} label>
          {data.map((entry, index) => {
            return <Cell key={`cell-${index}`} fill={COLORS[index]} />;
          })}
        </Pie>

        <Legend verticalAlign='bottom' height={28} />
        {/* <Tooltip />; */}
      </PieChart>
      <p>
        Pago Total:{" "}
        {pago.toLocaleString("es-ES", { style: "currency", currency: "EUR" })}
      </p>
    </div>
  );
};

export default ChartPie;
