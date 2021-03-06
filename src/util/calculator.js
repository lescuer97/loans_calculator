const calculator = (form) => {
  let { precio, interes, anos, prestamo } = form;

  //interes en base 0
  // const inter = interes / 100;

  const base = prestamo;

  //cuanto paga de interes
  const pagoint = base * (interes / 12);
  // console.log("pago int: ", pagoint);

  // amortizacion anual
  const amortpago = Math.pow(1 + interes / 12, 12 * anos);
  // console.log("amortpago: ", amortpago);

  // calcula el pago mensual
  const pagoMensual = (pagoint * amortpago) / (amortpago - 1);
  // console.log("pagoMensual :", pagoMensual);

  let total = [];

  // pago total de amortización
  let totalPagoAmor = 0;

  //conto de meses de transasction
  let mes = 0;
  let pagoTotInt = 0;
  let id = 0;

  for (let i = prestamo; i >= 0; i) {
    if (i.toFixed(2) <= 0.00 || prestamo.toFixed(2) * 1 <= 0.00) {
    
       return total;
    }
    //cuanto paga de interes y el total
    const pagoint = prestamo * (interes / 12);

    pagoTotInt = pagoTotInt + pagoint;

    const menosBlc = pagoMensual - pagoint;

    totalPagoAmor = totalPagoAmor + menosBlc;

    prestamo = prestamo - menosBlc;

    mes++;
    const gastoTotal = totalPagoAmor + pagoTotInt;

    let objMes = {
      balance: prestamo.toFixed(2),
      mes: mes.toFixed(0),
      pago_mensual: pagoMensual.toFixed(2),
      pago_interes: pagoint.toFixed(2),
      pago_amor: menosBlc.toFixed(2),
      intereses_totales: pagoTotInt.toFixed(2),
      pago_total_amor: totalPagoAmor.toFixed(2),
      gasto_total: gastoTotal.toFixed(2),

      id: id++,
    };

    i = i - menosBlc;
    total.push(objMes);
  }

  return total;
};

export default calculator;
