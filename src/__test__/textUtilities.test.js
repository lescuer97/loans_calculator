
  import React from 'react';
import calculator from '../util/calculator';

test("calculating mortgage", () =>{
    const result =  calculator({
    precio: 100000,
    prestamo: 80000,
    anos: 30,
    interes: 0.07,
});
expect( result.pop()).toStrictEqual({
balance: "0.00",
gasto_total: "191607.12",
id: 359,
intereses_totales: "111607.12",
mes: "360",
pago_amor: "529.16",
pago_interes: "3.09",
pago_mensual: "532.24",
pago_total_amor: "80000.00",
})
})