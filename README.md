# Lua Store
## Requerimientos
1.	Usuarios. Tiene que iniciar sesión por email y alguna red social.
2.	Sistema de fidelización de usuarios: En cada compra se le dan unos respectivos coins que pueden ser usados como un descuento de máximo 10% en algún producto.
3.	Chat de soporte: manejar problemas con pagos o productos.
4.	Integración de pasarela externa, pero teniendo los datos principales para utilizar un método de pago nuevamente.
5.	Productos destacados (no personalizados, en general).
6.  Sistema de search, con filtros como categoría, marca, ordenar por precio etc.
7.	Carrito de Compras.
8.	Publicidad en la página.
9.	Gestionar los productos (CRUD, poder hacer descuento a los productos y que se refleje el mismo como una promoción).
10.	Gestionar los pedidos (CRUD para el administrador principal, y diferentes empleados de logística que solo puedan modificar los pedidos y se hagan responsables de los asignados a ellos).

## Cronograma
Cronograma de actividades, teniendo como Semana 1 la que inicia el 23 de septiembre de 2019, y siendo la Semana 7 la que finaliza el 1 de Noviembre de 2019:
![alt text](https://i.imgur.com/sR48VUJ.png)
Cualquier duda o sugerencia con el cronograma o los requerimientos, comentar por el canal general de Slack.

## Back End

Dirección: ec2-3-83-217-87.compute-1.amazonaws.com:3000

Rutas:

> POST /user

Crear usuario, enviar un JSON como parametro.

> GET /user

Obtener datos del usuario, enviar email como query.

> GET /product/name

Obtiene un autocompletado, enviar el name como query.

> GET /product

Obtiene todos los datos de un product, enviar name como query.

> GET /product/id

Obtiene todos los datos de un product, enviar id como query.

> GET /product/new

Obtiene los 10 productos más recientes.

> GET /product/photo

Obtiene la foto segun el productid, enviar id como query.

> POST /product/url

Cambia la url de la foto de un producto segun su id, enviar un json como parametro que contenga url y id.
**EN PRUEBA - Puede tener errores**

## Front End
Para visualizar lo que corresponde a Front end:
1. Abrir una consola (No PS, quieranse un poquito) en la carpeta /frontEnd del proyecto y ejecutar:

    > npm install && npm run ng serve
  
2. Cuando el servidor de Angular esté corriendo pueden ver la pagina en: http://localhost:4200 

Dirección.
> 3.84.167.123


_Nota: se presupone que tiene instalado Node.js en su computador_
