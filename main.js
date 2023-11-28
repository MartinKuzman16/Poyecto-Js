alert();
// variables
let corte = "300";
let barba = "200";
let cejas = "100";
let platinado = " 1000"

let corte_barba = "400";
let corte_barba_cejas = "500";

let promo1 = corte_barba;
let promo2 = corte_barba_cejas;

/*let servicios = prompt ("ingresa un servicio");

console.log (" el precio es  " + corte + " pesos");*/

/*-------------------------------------------------*/


let SoloDisponible = "martes"
let dia = prompt (" ingresa dia para agendarse");
const fecha = "martes";

if (fecha === "martes") {
console.log("Si hay disponibilidad");
} 

else if (fecha === " jueves") { 
    console.log("Si hay disponibilidad");

}

else if ( fecha === "miercoles") {
        console.log ( "No hay disponibilidad");

} 

/*if (martes && jueves){
    console.log ("hay disponibilidad");
} else{
    console.log ("no hay disponibilidad");
}
*/

//----------------------------------------------------
// SE TRANCA LA WEB SI ACTIVO ESTA LINEA DE CODIGO 
/*let ingreso = prompt ("para platinar ingrese aqui el dia")

while (ingreso !="sabado, lunes, miercoles, viernes");

    console.log ("agenda confirmada para el dia " + ingreso );*/


const pago = prompt ("¿como sera su metodo de pago?" ) ;

switch (pago) {
    case "efectivo":
    console.log (" paga con efectivo");
    break;
    case "tarjeta":
        console.log ("paga con tarjeta");
    break;
 default: S
 console.log ("no aceptamos ese metodo de pago");
}











