import React,{ useMemo} from 'react'
import {
  BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const BarCh = (props) => {
 const forms = useMemo(() => props.mortiData, [props.mortiData]);

 const data = [
   {name: "A", Interes: forms[0].intereses_totales * 1, Capital: forms[0].pago_total_amor  },
   {name: "B", Interes: forms[1].intereses_totales * 1, Capital: forms[1].pago_total_amor  },
   {name: "C", Interes: forms[2].intereses_totales * 1, Capital: forms[2].pago_total_amor  },
   {name: "D", Interes: forms[3].intereses_totales * 1, Capital: forms[3].pago_total_amor  },
     
   
 ]

  return (
 <div className="text-xs">
     <BarChart
     barGap={0}
     maxBarSize={70}
      width={500}
      height={300}
      data={data}
      margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
     >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar maxBarSize={50} dataKey="Capital" stackId="a" fill="#32cd32"  />
        <Bar maxBarSize={50} dataKey="Interes" stackId="a" fill="#ff4500" />

     </BarChart>
      </div>
    
  )
}

export default BarCh
