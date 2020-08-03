const db = firebase.firestore();

db.enablePersistence()
    .catch(error => {
        if (error.code == 'failed-precondition') {
            console.log('Error en la persistencia');
        } else if (error.code === 'unimplemented') {
            console.log('La persistencia no esta disponible');
        }
    });

// cuando el alumno se inscribe a una materia
// se actualiza la vista
db.collection('alumno').onSnapshot(snaphot => {
    snaphot.docChanges().forEach(change => {
        
        if (change.type === 'added') {
            paintSubject(change.doc.id, change.doc.data());
        }

    });
});

db.collection('tareas').onSnapshot(snaphot => {
    snaphot.docChanges().forEach(change => {
        
        if (change.type === 'added') {
            paintTask(change.doc.id, change.doc.data());
        }

    });
});

// Datos para poder inscribirse a una materia correctamente

let materiasId = [];
let materiasData = [];

db.collection('materias').get().then(snaphot => {
    snaphot.forEach(doc => {
        materiasId.push(doc.id);
        materiasData.push(doc.data());
    });
});

let materiasAlumno = [];

db.collection('alumno').get().then(snaphot => {
    snaphot.forEach(doc => {
        materiasAlumno.push(doc.id);
    });
});

// boton para inscribirse a materias
$('#subjectForm').on('submit', e => {

    const subjectId = $('#subjectId').val();

    e.preventDefault();

    if (materiasAlumno.includes(subjectId)) {
        console.log('Ya esta inscrito a esta materia');
    } else if (materiasId.includes(subjectId)) {

        db.collection('alumno')
            .doc(subjectId)
            .set(materiasData[materiasId.indexOf(subjectId)])
            .catch(error => console.log('Error al añadir materia:', error));

        materiasAlumno = [];

        db.collection('alumno').get().then(snaphot => {
            snaphot.forEach(doc => {
                materiasAlumno.push(doc.id);
            });
        });

        $('#subjectModal').modal('hide');
        $('#subjectId').val('');

    } else {
        console.log('No existe el codigo de materia');
    }

});

$('.cards-subject').on('click', '.card-header', e => {
    db.collection('tareas').doc(e.target.id)
        .get()
        .then(doc => {
            openTask(doc.id, doc.data());
        }).catch(error => {
            console.log('Error al obtener datos:', error);
        });;
});

$('.cards-classes').on('click', '.card-header', e => {
    db.collection('tareas').where('materia', '==', e.target.id)
        .get()
        .then(snaphot => {
            removeElementsTask();
            snaphot.forEach(doc => {
                if (doc.exists) {
                    paintTaskSelected(doc.id, doc.data());
                } else {
                    console.log('La materia seleccionada aun no contiene tareas');
                }
            });
        }).catch(error => {
            console.log('Error al obtener datos:', error);
        });;
});

$('.cards-subject-selected').on('click', '.card-selected .card .card-header', e => {
    db.collection('tareas').doc(e.target.id)
        .get()
        .then(doc => {
            openTask(doc.id, doc.data());
        }).catch(error => {
            console.log('Error al obtener datos:', error);
        });;
});

function updateDatesTask(id) {
    db.collection('tareas').doc(id).update({
        'entregado': true
    }).then(() => {
        $('.fixed-bottom .btn').prop('disabled', true);
    });
}