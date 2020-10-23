const calculator = (form) => {
  let { precio, interes, años, prestamo } = form;
  //interes en base 0
  const inter = interes / 100;

  const base = prestamo;
  //cuanto paga de interes
  const pagoint = base * (inter / 12);

  // amortizacion anual
  const amortpago = Math.pow(1 + inter / 12, 12 * años);

  // calcula el pago mensual
  const pagoMensual = (pagoint * amortpago) / (amortpago - 1);

  let total = [];

  //conto de meses de transasction
  let mes = 0;

  for (let i = prestamo; i >= 0; i) {
    if (i.toFixed(0) <= 0 && prestamo.toFixed(0) * 1 <= 0) {
      break;
    }
    //cuanto paga de interes
    const pagoint = prestamo * (inter / 12);

    const menosBlc = pagoMensual - pagoint;

    prestamo = prestamo - menosBlc;
    console.log("prestamo :", prestamo.toFixed(2));
    console.log("pago  interes :", pagoint.toFixed(2));
    console.log("pago  amor :", menosBlc.toFixed(2));
    mes++;

    let totmes = {
      balance: prestamo.toFixed(2),
      mes: mes.toFixed(2),
      pago_mesual: pagoMensual.toFixed(2),
      pago_interes: pagoint.toFixed(2),
      pago_amor: menosBlc.toFixed(2),
    };

    i = i - menosBlc;
    total.push(totmes);
  }

  return total;
};

export default calculator;
