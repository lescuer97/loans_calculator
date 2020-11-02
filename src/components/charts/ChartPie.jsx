import React, { useMemo } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

// TODO ADD ANIMATION
const ChartPie = (props) => {
  const data = useMemo(() => props.graphdat, [props.graphdat]);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <>
      <PieChart width={300} height={300}>
        <Pie dataKey='value' data={data} label>
          {data.map((entry, index) => {
            return <Cell key={`cell-${index}`} fill={COLORS[index]} />;
          })}
        </Pie>

        <Legend verticalAlign='bottom' height={28} />
        {/* <Tooltip />; */}
      </PieChart>
    </>
  );
};

export default ChartPie;
