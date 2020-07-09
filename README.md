# Proyecto de AWA
## Aplicación Educativa

Una aplicación progresiva first-mobile para apoyar a profesores.

La orientación es la gente que puede acceder a un celular y tiene 
capacidad baja de conexión a red (la conexión es lenta y además el costo es una limitación).

La aplicación debe manejar recursos, en orden de preferencia: Texto plano (100 KB), PDF(300 KB),
Audio y Video (1 MB y/o una duración de 3 minutos). Los tamaños son referenciales para indicar 
una ALERTA al profesor con respecto al recurso y su costo en conectividad.

**Hay tres tipos de usuario:** Profesor, Estudiante, Padre de Familia.

**Profesor:** El profesor es el responsable de un curso. Puede subir recursos (archivos de audio, 
video, texto, documentos), puede crear Actividades (Tarea, Cuestionario). Puede crear recursos
de audio y video accediendo a las capacidades del dispositivo.

**Estudiante:** Está registrado en un curso. Puede descargar/ver un 
recurso. Puede completar una actividad (tarea o cuestionario).

**Padre de Familia:** Puede ver el progreso del estudiante.

### Considera que:

* Un Profesor puede crear varios cursos y generar un código de registro que compartirá con sus estudiantes.
* Un Estudiante puede registrarse a varios cursos con el código que le proveyó su profesor.
* Un Padre de familia se registra con un código obtenido desde el estudiante.

### Para Registrarse en la Plataforma:

* Un Profesor debe indicar: Nombre completo, correo electrónico, nombre de usuario y contraseña.
* Un Estudiante debe indicar: Nombre completo, correo electrónico(no obligatorio), nombre de usuario y contraseña.
* Un Padre debe indicar: Nombre completo, correo electrónico(no obligatorio), nombre de usuario y contraseña.

Cuando un usuario olvida contraseña, puede recuperarla por medio del correo electrónico, en el caso de 
padres y estudiantes , el profesor puede responder a la solicitud de nueva contraseña para el estudiante 
y el padre de familia, la notifica por otros canales distintos al email de forma manual.

### Acerca del Recurso:

**Tiene un estado:** Edición (el profesor está preparando el recurso y temporalmente guardado ), publicado
(estudiantes pueden ver el recurso), visto (cuando está publicado y el estudiante lo descargó o miró)
Tiene una fecha de publicación y una fecha de visto.

**El recurso puede ser:** Texto plano, Documento (de preferencia PDF), Audio o Video.

### Acerca de la Actividad:

**Tiene un estado:** Edición, publicado, entregado pendiente de revisión, entregado y revisado, 
no entregado, entregado con retraso(significa también que esta pendiente de revisión).

Tiene una fecha de publicación y una fecha límite de entrega (se admite entrega posterior 
a la fecha límite y es con estado de retraso), y fecha real de entrega por parte del estudiantes.

Tiene asociado un campo de texto para comentarios del profesor, esta es la retroalimentación a la actividad.

**La actividad puede ser de dos tipos:** Tarea, Cuestionario.

**La tarea tiene:** una descripción de lo que se espera que haga el estudiante.

**El profesor indica un tipo de entrega:** Texto plano, archivo de documento (admite todos estos
WORD/PDF/Texto plano), Audio, Video. El profesor llena comentario/retroalimentación al estudiante. NO HAY
CALIFICACIÓN. El estudiante puede tener un borrador de la tarea, la entrega se hace efectiva al cumplirse
la fecha y la tarea ya no es editable.

**El cuestionario tiene:** un conjunto de preguntas, las preguntas las prepara el profesor. Tiene un número
de intentos permitidos, puede tener un tiempo límite de realización (5 minutos, 15,minutos o más). El estudiante
responde las preguntas y el cuestionario es enviado por acción del estudiante o finalización del tiempo.

**Las preguntas son de tres tipos:** selección simple (una respuesta correcta) , selección múltiple (marcar 
varias respuestas), respuesta corta (el estudiante llena una entrada de texto de la cantidad de palabras que
el profesor indique). Las de selección el profesor debe indicar además de la pregunta las respuestas correctas
y una retroalimentación sugerida en caso de respuesta incorrecta. La retroalimentación/comentario es del 
total de intentos y el profesor la edita manualmente antes de enviar.