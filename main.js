
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
/*-------------------------3era entrega----------------------------------------*/

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

/*-------------------------3era entrega----------------------------------------*/

        document.addEventListener('DOMContentLoaded', function() {
            cargarAgendaDesdeStorage();
        });

        function agendarServicio() {
            // Obtener datos del formulario
            var nombre = document.getElementById('nombre').value;
            var servicio = document.getElementById('servicio').value;
            var fecha = document.getElementById('fecha').value;
            var hora = document.getElementById('hora').value;

            // Validar y almacenar en localStorage
            if (nombre && servicio && fecha && hora) {
                var nuevoServicio = {
                    nombre: nombre,
                    servicio: servicio,
                    fecha: fecha,
                    hora: hora
                };

                // Obtener servicios existentes o inicializar un array vacío
                var agenda = JSON.parse(localStorage.getItem('agenda')) || [];

                // Agregar el nuevo servicio
                agenda.push(nuevoServicio);

                // Almacenar en localStorage
                localStorage.setItem('agenda', JSON.stringify(agenda));

                // Limpiar el formulario
                document.getElementById('barberForm').reset();

                // Recargar la lista de agenda
                cargarAgendaDesdeStorage();
            } else {
                alert('Por favor, complete todos los campos.');
            }
        }

        function cargarAgendaDesdeStorage() {
            var listaAgenda = document.getElementById('listaAgenda');
            listaAgenda.innerHTML = '';

            // Obtener servicios almacenados en localStorage
            var agenda = JSON.parse(localStorage.getItem('agenda')) || [];

            // Mostrar la lista de servicios
            agenda.forEach(function(servicio) {
                var listItem = document.createElement('li');
                listItem.textContent = `${servicio.nombre} - ${servicio.servicio} - ${servicio.fecha} - ${servicio.hora}`;
                listaAgenda.appendChild(listItem);
            });
        }
    

