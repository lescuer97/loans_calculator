import React, { useMemo} from "react";
import { PieChart, Pie, Cell, Legend, Tooltip,  BarChart, Bar,  XAxis, YAxis, CartesianGrid } from "recharts";
// TODO ADD ANIMATION
const ChartPie = (props) => {
  const data = useMemo(() => props.graphdat, [props.graphdat]);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];



  let { balance, pago_mensual, gasto_total, pago_total_amor, intereses_totales,  } = props.mortiData;

  return (
    <div className='flex flex-col'>
     
      <ul className=' list-inside flex flex-col'>
        <div className="mb-2">
        <div className="bg-green-300">
        <li className="flex justify-between ml-2" >
          <strong>Tu cuota mensual:</strong>
           <p className="mr-3" >{pago_mensual}</p>
        </li>
             <li className="flex justify-between ml-2">
          <strong>La casa vale:</strong> <span className="mr-3" >{props.precio}</span>
        </li>
        </div>
        </div>
        <div className="mt-2">
        <div className="bg-red-500  ">
        <li className="flex justify-between ml-2">
            <strong>Pediste prestado:</strong> <span className="mr-3" >{pago_total_amor}</span>
        </li>
        <li className="flex justify-between ml-2">
          {" "}
          <strong>Terminaste Pagando: </strong> <span className="mr-3" >{gasto_total}</span>
        </li>
          <li className="flex justify-between ml-2">
          {" "}
          <strong> En Interes: </strong> <span className="mr-3" >{intereses_totales}</span>
        </li>
        </div>
        </div>
      </ul>
    <div className="my-2">
      <PieChart width={280} height={240}>
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
