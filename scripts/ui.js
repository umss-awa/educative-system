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
    $('.navbar-collapse').collapse('hide');
});

$('#tasks').on('click', () => {
    hideElementsHome(true);
    hideElementsSubject(false);
    hideElementsTask(true);
    $('.navbar-collapse').collapse('hide');
});

function openTask(data) {
    $('.task').remove();
    $('.content').append('<section class="task m-3 d-none"></section>');
    hideElementsSubject(true);
    hideElementsTask(false);
    let task = `
    <h3 class="mb-3 text-center">${data.titulo}</h3>
    <h6 class="mb-3">Fecha de entrega:
        ${data.limite.toDate().toDateString()}
        ${data.limite.toDate().toLocaleTimeString('it-IT')}
    </h6>
    <p>
        ${data.descripcion}
    </p>`;
    $('.task').append(task);
}

let tasks = [];

$('#btnSubmitFile').on('click', () => {
    tasks.forEach(task => {
        console.log(task);
    });
});

$('#deleteAllTasks').on('click', () => {
    tasks = [];
    $('.content-task').remove();
    $('#uploadFileInput').replaceWith($('#uploadFileInput').val('').clone(true));
    $('.modal-body').append('<div class="content-task mt-3"></div>');
});

$('#uploadFileInput').on('change', e => {
    
    if(e.target.files.length > 0) {
        tasks.push(e.target.files[0]);
        let fileName = e.target.files[0].name;
        let task = `<span class="btn text-left d-block border border-primary mt-2">${fileName}</span>`;
        $('.content-task').append(task);
    }
});