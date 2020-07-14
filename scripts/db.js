const db = firebase.firestore();

db.enablePersistence()
    .catch(error => {
        if (error.code == 'failed-precondition') {
            console.log('Error en la persistencia');
        } else if (error.code === 'unimplemented') {
            console.log('La persistencia no esta disponible');
        }
    });

db.collection('materias').onSnapshot(snaphot => {
    snaphot.docChanges().forEach(change => {
        
        if (change.type === 'added') {
            paintSubject(change.doc.data());
        }

    });
});

$('#subjectForm').on('submit', e => {
    e.preventDefault();
    // console.log($('#subjectId').val());
    const subject = {
        nombre: 'Neva Materia',
        profesor: 'Nombre Apellido Profesor(a)'
    }

    db.collection('materias').add(subject)
        .catch(error => console.log('Error al añadir materia:', error));

});