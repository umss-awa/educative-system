# Proyecto de AWA
## Aplicación Educativa

### Requisitos para ejecutar PWA:
Tener instalado nodejs.

Instalar el paquete de nodejs:
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
### Notificaciones

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

