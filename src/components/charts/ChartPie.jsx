import React, { useMemo} from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

// TODO ADD ANIMATION
const ChartPie = (props) => {
  const data = useMemo(() => props.graphdat, [props.graphdat]);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];



  let { balance, pago_mensual, gasto_total, pago_total_amor, intereses_totales,  } = props.mortiData;

  return (
    <div className='flex flex-col'>
      <ul className='flex flex-col p-1'>
        
        <li>
          <strong>Tu cuota mensual:</strong> <span>{pago_mensual}</span>
        </li>
             <li>
          <strong>La casa vale:</strong> <span>{props.precio}</span>
        </li>
        <li>
            <strong>Pediste prestado:</strong> <span>{pago_total_amor}</span>
        </li>
        <li>
          {" "}
          <strong>Terminaste Pagando: </strong> <span>{gasto_total}</span>
        </li>
          <li>
          {" "}
          <strong> En Interes: </strong> <span>{intereses_totales}</span>
        </li>
      </ul>
    <div className="">
      <PieChart width={340} height={320}>
        <Pie dataKey='value' nameKey="name" data={data} legendType='circle' label labelLine>
          {data.map((entry, index) => {
            return <Cell key={`cell-${index}`} fill={COLORS[index]} />;
          })}
        </Pie>

        <Legend verticalAlign='bottom' height={28} />
        {/* <Tooltip />; */}
      </PieChart>
      {/* <p>
        Pago Total:{" "}
        {pago.toLocaleString("es-ES", { style: "currency", currency: "EUR" })}
      </p> */}
    </div>
    </div>
  );
};

export default ChartPie;
