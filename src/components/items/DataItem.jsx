import React from "react";

const DataItem = (props) => {
  const {
    balance,
    mes,
    pago_mesual,
    pago_interes,
    pago_amor,
    intereses_totales,
    pago_total_amor,
    gasto_total,
  } = props.data;
  return (
    <>
      <tr>
        <td className='border px-4 py-2'>{mes}</td>
        <td className='border px-4 py-2'>{pago_mesual}</td>
        <td className='border px-4 py-2'>{pago_interes}</td>
        <td className='border px-4 py-2'>{pago_amor}</td>
        <td className='border px-4 py-2'>{intereses_totales}</td>
        <td className='border px-4 py-2'>{pago_total_amor}</td>
        <td className='border px-4 py-2'>{gasto_total.toFixed(2)}</td>
      </tr>
    </>
  );
};

export default DataItem;
