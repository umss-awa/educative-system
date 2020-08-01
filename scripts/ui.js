const paintTask = (id, data) => {
    let task = `
    <div class="card mb-3">
        <div class="btn card-header text-center pt-2 pb-2" id="${id}">
            ${data.titulo}
        </div>
        <div class="card-body text-dark p-2">
            <h6 class="card-title">Materia: ${data.nombre}</h6>
            <p class="card-text">${subString(data.descripcion)}</p>
        </div>
        <div class="card-footer text-muted p-1 text-center">
            ${data.limite.toDate().toDateString()}
            ${data.limite.toDate().toLocaleTimeString('it-IT')}
        </div>
    </div>`;

    $('.cards-subject').append(task);
}

const paintTaskSelected = (id, data) => {
    let task = `
    <div class="card mb-3">
        <div class="btn card-header text-center pt-2 pb-2" id="${id}">
            ${data.titulo}
        </div>
        <div class="card-body text-dark p-2">
            <p class="card-text">${subString(data.descripcion)}</p>
        </div>
        <div class="card-footer text-muted p-1 text-center">
            ${data.limite.toDate().toDateString()}
            ${data.limite.toDate().toLocaleTimeString('it-IT')}
        </div>
    </div>`;

    $('.cards-subject-selected .card-selected').append(task);
}



const subString = (cadena) => {
    if (cadena.length > 50)
        return cadena.substr(0, 50) + '...';
    else 
        return cadena;
}


const paintSubject = (id, data) => {
    const subject = `
    <div class="card mb-3">
        <div class="btn card-header text-center" id="${id}">
            ${data.nombre}
        </div>
        <div class="card-body text-dark p-3">
            <h5 class="card-title">Profesor(a):</h5>
            <p class="card-text">${data.profesor}</p>
        </div>
    </div>`;

    $('.cards-classes').append(subject);
}

function hideElementsHome(bool) {
    if (bool) {
        $('.btn-add').addClass('d-none');
        $('.cards-classes').addClass('d-none');
        $('.navbar-brand').text('');
    } else {
        $('.btn-add').removeClass('d-none');
        $('.cards-classes').removeClass('d-none');
        $('.navbar-brand').text('CLASSES');
    }
}

function removeElementsTask() {
    hideElementsHome(true);
    $('.cards-subject-selected').removeClass('d-none');
    $('.cards-subject-selected div').remove();
    $('.cards-subject-selected').append('<div class="card-selected"></div>');
    $('.navbar-collapse').collapse('hide');
}

function hideElementsSubject(bool) {
    if (bool) {
        $('.cards-subject').addClass('d-none');
    } else {
        $('.cards-subject').removeClass('d-none');
    }
}

function hideElementsTask(bool) {
    if (bool) {
        $('.fixed-bottom').addClass('d-none');
        $('.task').addClass('d-none');
    } else {
        $('.fixed-bottom').removeClass('d-none');
        $('.task').removeClass('d-none');
    }
}

$('#home').on('click', () => {

    hideElementsHome(false);
    hideElementsSubject(true);
    hideElementsTask(true);
    $('.cards-subject-selected').addClass('d-none');
    $('.navbar-collapse').collapse('hide');
});

$('#tasks').on('click', () => {
    hideElementsHome(true);
    hideElementsSubject(false);
    hideElementsTask(true);
    $('.cards-subject-selected').addClass('d-none');
    $('.navbar-collapse').collapse('hide');
});

function openTask(id, data) {
    $('.task').remove();
    $('.content').append('<section class="task m-3 d-none"></section>');
    $('.cards-subject-selected').addClass('d-none');
    hideElementsSubject(true);
    hideElementsTask(false);

    if (data.entregado) $('.fixed-bottom .btn').prop('disabled', true);
    else $('.fixed-bottom .btn').prop('disabled', false);

    let task = `
    <h3 class="mb-3 text-center">${data.titulo}</h3>
    <input type="hidden" id="idTask" value="${id}">
    <h6 class="mb-3">Fecha de entrega:
        ${data.limite.toDate().toDateString()}
        ${data.limite.toDate().toLocaleTimeString('it-IT')}
    </h6>
    <p>
        ${data.descripcion}
    </p>`;
    $('.task').append(task);
}

// Seccion para seleccionar un archivo para subir la tarea
let tasks = [];

$('#btnSubmitFile').on('click', () => {
    if (tasks.length > 0) {
        if (navigator.onLine) {
            console.log('Se entregaron los siguientes archivos:');
            tasks.forEach(task => {
                console.log(task);
            });
            updateDatesTask($('#idTask').val());
            $('#taskModal').modal('hide');
            deleteModalTask();
        }else {
            console.log('Usted no puede enviar archivos si no tiene conexion a internet.');
        }
    } else {
        console.log('No hay archivos que enviar.');
    }
});

function deleteModalTask() {
    tasks = [];
    $('.content-task').remove();
    $('#uploadFileInput').replaceWith($('#uploadFileInput').val('').clone(true));
    $('.modal-body').append('<div class="content-task mt-3"></div>');
}

$('#deleteAllTasks').on('click', () => {
    deleteModalTask();
});

$('#uploadFileInput').on('change', e => {
    
    if(e.target.files.length > 0) {
        tasks.push(e.target.files[0]);
        let fileName = e.target.files[0].name;
        let task = `<span class="btn text-left d-block border border-primary mt-2">${fileName}</span>`;
        $('.content-task').append(task);
    }
});