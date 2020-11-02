const calculator = (form) => {
  let { precio, interes, anos, prestamo } = form;

  //interes en base 0
  const inter = interes / 100;

  const base = prestamo;

  //cuanto paga de interes
  const pagoint = base * (inter / 12);
  // console.log("pago int: ", pagoint);

  // amortizacion anual
  const amortpago = Math.pow(1 + inter / 12, 12 * anos);
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
    if (i.toFixed(0) <= 0 || prestamo.toFixed(0) * 1 <= 0) {
      break;
    }
    //cuanto paga de interes y el total
    const pagoint = prestamo * (inter / 12);

    pagoTotInt = pagoTotInt + pagoint;

    const menosBlc = pagoMensual - pagoint;

    totalPagoAmor = totalPagoAmor + menosBlc;

    prestamo = prestamo - menosBlc;

    mes++;

    let objMes = {
      balance: prestamo.toFixed(2),
      mes: mes.toFixed(0),
      pago_mesual: pagoMensual.toFixed(2),
      pago_interes: pagoint.toFixed(2),
      pago_amor: menosBlc.toFixed(2),
      intereses_totales: pagoTotInt.toFixed(2),
      pago_total_amor: totalPagoAmor.toFixed(2),
      gasto_total: totalPagoAmor + pagoTotInt,
      id: id++,
    };

    i = i - menosBlc;
    total.push(objMes);
  }

  return total;
};

export default calculator;
