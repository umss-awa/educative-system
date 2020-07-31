const db = firebase.firestore();

db.enablePersistence()
    .catch(error => {
        if (error.code == 'failed-precondition') {
            console.log('Error en la persistencia');
        } else if (error.code === 'unimplemented') {
            console.log('La persistencia no esta disponible');
        }
    });

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


// cuando el alumno se inscribe a una materia
// se actualiza la vista
db.collection('alumno').onSnapshot(snaphot => {
    snaphot.docChanges().forEach(change => {
        
        if (change.type === 'added') {
            paintSubject(change.doc.data());
        }

    });
});

// boton para inscribirse a materias como alumno
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

    } else {
        console.log('No existe el codigo de materia');
    }
            


});