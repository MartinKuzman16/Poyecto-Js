

$(document).ready(function() {
    cargarAgendaDesdeStorage();
    
    // Asociar la función al botón Agendar
    $('#btnAgendar').click(function() {
        guardarInfoEnLocalStorage();
    });
});

function cargarAgendaDesdeStorage() {
    const listaAgenda = $('#listaAgenda');
    listaAgenda.html('');

    // Obtener servicios almacenados en localStorage
    const agenda = JSON.parse(localStorage.getItem('agenda')) || [];

    // Mostrar la lista de servicios
    $.each(agenda, function(index, servicio) {
        const listItem = $('<li>').text(`${servicio.nombre} - ${servicio.servicio} - ${servicio.fecha} - ${servicio.hora}`);
        listaAgenda.append(listItem);
    });
}

function guardarInfoEnLocalStorage() {
    const nombre = $('#nombre').val();
    const servicio = $('#servicio').val();
    const fecha = $('#fecha').val();
    const hora = $('#hora').val();

    if (nombre && servicio && fecha && hora) {
        const nuevoServicio = {
            nombre: nombre,
            servicio: servicio,
            fecha: fecha,
            hora: hora
        };

        // Obtener la agenda actual de localStorage
        const agenda = JSON.parse(localStorage.getItem('agenda')) || [];

        // Agregar el nuevo servicio a la agenda
        agenda.push(nuevoServicio);

        // Guardar la agenda actualizada en localStorage
        localStorage.setItem('agenda', JSON.stringify(agenda));

        // Recargar la lista de la agenda
        cargarAgendaDesdeStorage();

        // Mostrar mensaje de éxito
        mostrarMensajeExito();
    } else {
        // Si hay algún problema, podrías mostrar un mensaje de error aquí
        console.error('Hubo un problema al agendar el servicio.');
    }
}

function mostrarMensajeExito() {
    alert('Servicio agendado con éxito.');
}

