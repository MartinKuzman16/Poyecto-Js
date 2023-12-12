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

//-----------------------------------------------------------------
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
//---------------------------------------------------------
 // Declaración de función
function sumar(corte,barba) {
    return corte + barba;
    }

    let resultado = sumar(corte, barba);
    console.log(resultado)





// Declaración de un objeto
let cliente = {
    nombre: "Martin",
    costo_servicio_corte:300,
    };
    

    console.log(cliente.nombre);
    console.log(cliente.costo_servicio_corte); 

    



    // Declaración de array
let servicios = ["corte", "barba", "cejas", "platinado"];

console.log(servicios[0]); 
console.log(servicios[1]);
console.log(servicios[2]); 

console.log(servicios[3]); 
console.log(servicios[4]); 


// find

let Servicios = [
    { nombre: "corte", precio: "300" },
    { nombre: "barba", precio: "200" },
    { nombre: "cejas", precio: "100" }
];

// Buscar servicio por nombre
let BuscaServicio = Servicios.find(function(Servicios) {
  return Servicios.nombre === "corte";
});


console.log(BuscaServicio);

// filter

let ServiciosPrecios = [
    { nombre: "corte", precio: "300" },
    { nombre: "barba", precio: "200" },
    { nombre: "cejas", precio: "100" }
];


let PrecioBarba = precio.filter(function(precio) {
  return precio.barba === "200";
});

console.log(PrecioBarba);


