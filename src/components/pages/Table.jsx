import React, { useEffect } from "react";
import DataItem from "../items/DataItem";

const Table = (props) => {
  const { mort } = props;
  //  TODO add overflow of the data

  return (
    <div>
      <table className='table-auto'>
        <thead>
          <tr>
            <th className='border px-4 py-2'>Mes</th>
            <th className='border px-4 py-2'>Pago Mensual</th>
            <th className='border px-4 py-2'>Pago Interes</th>
            <th className='border px-4 py-2'>Pago Amortización</th>
            <th className='border px-4 py-2'>Pago Total de interes</th>
            <th className='border px-4 py-2'>Pago Total de amortización</th>
            <th className='border px-4 py-2'>Gasto Total</th>
          </tr>
        </thead>

        <tbody>
          {" "}
          {mort.map((data) => {
            return <DataItem data={data} key={data.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
