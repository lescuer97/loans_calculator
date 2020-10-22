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

  for (let i = prestamo; i >= 0; i++) {
    //cuanto paga de interes
    const pagoint = prestamo * (inter / 12);

    const menosBlc = pagoMensual - pagoint;
    console.log(menosBlc);

    prestamo = prestamo - menosBlc;
    console.log("prestamo :", prestamo);
    console.log("pago  interes :", pagoint);
    console.log("pago  amor :", menosBlc);
    mes++;

    let totmes = {
      balance: prestamo,
      mes,
      pago_mesual: pagoMensual,
    };

    i = i - menosBlc;
    total.push(totmes);
    if (i <= 0 && prestamo <= 0) {
      break;
    }
  }

  return total;
};

export default calculator;
