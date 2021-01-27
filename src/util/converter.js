const  converter = (obj, ahorro) => {
  obj.balance = ( obj.balance *1).toLocaleString("es-ES", { style: "currency", currency: "EUR" });
  // obj.balance =  obj.balance.toLocaleString("es-ES", { style: "currency", currency: "EUR" });
    obj.mes =  obj.mes * 1;
    // obj.mes =  obj.mes.toLocaleString("es-ES", { style: "currency", currency: "EUR" });
    obj.pago_mensual = (obj.pago_mensual *1).toLocaleString("es-ES", { style: "currency", currency: "EUR" });
    // obj.pago_mensual = obj.pago_mensual.toLocaleString("es-ES", { style: "currency", currency: "EUR" });
    obj.pago_interes = (obj.pago_interes *1).toLocaleString("es-ES", { style: "currency", currency: "EUR" });
    // obj.pago_interes = obj.pago_interes.toLocaleString("es-ES", { style: "currency", currency: "EUR" });
    obj.pago_amor=  (obj.pago_amor * 1).toLocaleString("es-ES", { style: "currency", currency: "EUR" });
    // obj.pago_amor=  obj.pago_amor.toLocaleString("es-ES", { style: "currency", currency: "EUR" });
    obj.intereses_totales =  (obj.intereses_totales *1).toLocaleString("es-ES", { style: "currency", currency: "EUR" }); 
    // obj.intereses_totales =  obj.intereses_totales.toLocaleString("es-ES", { style: "currency", currency: "EUR" }); 
    obj.pago_total_amor =  (obj.pago_total_amor *1).toLocaleString("es-ES", { style: "currency", currency: "EUR" });
    // obj.pago_total_amor =  obj.pago_total_amor.toLocaleString("es-ES", { style: "currency", currency: "EUR" });
    obj.gasto_total =   ((obj.gasto_total *1) + (ahorro * 1)).toLocaleString("es-ES", { style: "currency", currency: "EUR" }); 
    // obj.gasto_total =   obj.gasto_total.toLocaleString("es-ES", { style: "currency", currency: "EUR" }); 
return obj;
}

export default converter;