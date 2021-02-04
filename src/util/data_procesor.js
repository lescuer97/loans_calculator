
// TODO IMPORTAR LA CALCULADORA DIRECTAMENTE A LA FUNCION, NO EN LOS PARAMETROS
 const data_procesor =  (calculator, data, 
    prestamo=0,
    anos=0,
    variacion=0
 ) => {

// if variacion existe obligatoriamente existen alguno de los dos datos a cambiar
if (variacion === 0) {
    // calcula todos los pagos mensuales necesarios para amortizacion
    const arrayOfResults = calculator(data);
    // toma el ultimo array de todo el calculo,
    //este es el que contiene los resultados finales
    const lastObjectOfArray = arrayOfResults.pop();
    return lastObjectOfArray


}else {
    if (prestamo !== 0) {
      data.prestamo = prestamo * variacion;
      }
      if (anos !== 0) {
         data.anos = anos * variacion;
      }
        // calcula todos los pagos mensuales necesarios para amortizacion
      const arrayOfResults = calculator(data);
        // toma el ultimo array de todo el calculo, 
        //este es el que contiene los resultados finales
      const lastObjectOfArray = arrayOfResults.pop();

      console.log(lastObjectOfArray)
      return lastObjectOfArray;


}
 }

 export default data_procesor;
