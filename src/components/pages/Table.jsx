import React, { useEffect } from "react";
import DataItem from "../items/DataItem";

const Table = (props) => {
  const { mort } = props;

  return (
    <div>
      {mort !== [] ? (
        <table className='table-auto'>
          <thead>
            <tr>
              <th className='px-4 py-2'>Mes</th>
              <th className='px-4 py-2'>Pago Mensual</th>
              <th className='px-4 py-2'>Pago Interes</th>
              <th className='px-4 py-2'>Pago Amortización</th>
              <th className='px-4 py-2'>Pago Total de interes</th>
              <th className='px-4 py-2'>Pago Total de amortización</th>
              <th className='px-4 py-2'>Gasto Total</th>
            </tr>
          </thead>

          <tbody>
            {" "}
            {mort.map((data) => {
              return <DataItem data={data} key={data.id} />;
            })}
          </tbody>
        </table>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Table;
