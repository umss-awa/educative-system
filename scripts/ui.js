

const paintSubject = data => {
    const subject = `<a class="card-link" href="pages/materia.html"><div class="card"><div class="card-header text-center">
    <h5 class="text-dark font-weight-bolder m-0">${data.nombre}</h5></div><div class="card-body text-dark p-3"><h5 class="card-title">Profesor(a):</h5>
    <p class="card-text">${data.profesor}</p></div></div></a>`;
    $('.cards').append(subject);
    // $('.cards').innerHTML += subject;
}