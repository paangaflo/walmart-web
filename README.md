## Acerca del proyecto

Listado de productos creados en un marco de presentación Resposive Disigner; Funciona para dispositivos mobiles (Iphone X), Tablets (Ipad) y web (Destopk).
Cada tarjeta presentada tiene imagen del producto, descripción, precio anterior y precio en oferta. Además de un botón para ver el detalle del producto.

En la carpeta src/app se encuentra el archivo products.json que contiene la información de los productos que se van a listar en el front-end.

## Características de implementación

Proyecto desarrollado con Angular 9 y maquetación con Bootstrap 4.

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Demo del proyecto

El demo se encuentra alojado en el siguiente hosting de Heroku:

[https://summa-fed.herokuapp.com](https://summa-fed.herokuapp.com)

## Instalacion del proyecto

Clonar repositorio:
```shell script
git clone https://github.com/paangaflo/summa-fed.git summa-fed
```
Ingresamos a la carpeta:
```shell script
cd summa-fed
```
Instalamos las dependencias de npm:
```shell script
npm install
```

## Ejecutar en ambiente local

Para ejecutar en ambiente local se debe modificar el archivo package.json
```shell script
"scripts": {
    "start": "ng serve",
```
Desplegar en local el proyecto:
```shell script
ng serve
```
Ingresar en el navegador web a la siguiente ruta:
```shell script
http://localhost:4200
```

## Ejecutar en ambiente prod

Construir la carpeta dist
```shell script
ng build --prod
```
Para ejecutar en ambiente prod se debe modificar el archivo package.json
```shell script
"scripts": {
    "start": "node server.js",
```
Desplegar en local el proyecto:
```shell script
node server.js
```
Ingresar en el navegador web a la siguiente ruta:
```shell script
http://localhost:8080
```
