# Proyecto de AWA
Proyecto para experimentar las ventajas y funcionalidades que se puede tener una aplicacion web progresiva.
## Aplicación Educativa
### Requisitos para ejecutar PWA:
Tener instalado nodejs.

Instalar el siguiente paquete de nodejs:
```
npm install --global http-server
```
Ingresar a la carpeta donde se encuentra el proyecto y ejecutar:
```
http-server
```
En el navegador en la url ingresar al localhost, con el puerto que le asigno el http-server:

```
localhost:8080
```
nota: En caso de que el navegador muestre un error "No se puede acceder a este sitio web" ponga: localhost:8080/index.html.
### Funcionalidades 

Módulo donde se simula la seccion de estudiante en la aplicación, por lo que ya se tiene datos de las clases. 
Para el estudiante se tienen las siguientes funcionalidades:
#### 1. Inscribirse a una materia.

Para inscribirse a una materia se debe presionar en el boton con simbolo más ubicado en la parte inferior derecha y se debe ingresar los siguientes codigos de materia :
1. a2b1b2
2. a3b1b2
3. a4b1b2
4. b3b1b2
#### 2. Listar todas las tareas.

Para listar todas las tareas se debe ingresar a la sección Tareas ubicado en la esquina superior derecha.
#### 3. Listar tareas por materia.

Se debe ingresar a la sección Materias y seleccionar una materia de la cual se quiere listar sus tareas.
#### 4. Entregar tareas.

Para entregar una tarea se debe ingresar a la tarea y en la parte inferior seleccionar el boton "Añadir tarea" para poder subir el archivo.
Una vez entregada la tarea se inhabilita el boton "Añadir tarea".

#### 5. Notificaciones

Una vez conceda los permisos de notificación a la APP, en la consola
se le asignara un token, copie el token en el apartado: 
```
"to" : "Ingresa el Token que te aparece en consola"
```
Esto se encuentra en el archivo notification.txt, una ves termine este paso,
copie todo el contenido del archivo notification.txt en su terminal, asegurese de tener
conexión a internet.

Cuando ejecute el script ocurrida dos cosas:
1. Si usted tiene la APP abierto y ademas es visible en su pantalla, solo mostrara el mensaje
en consola.
2. Si usted tiene la APP cerrada o no se encuetra visible, le llegara una notificación en pantalla.

