# Omegonorreaome-store
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

## Front End
Para visualizar lo que corresponde a Front end:
1. Asegurarse de tener descargado la branch **frontEnd** de github.
2. Abrir una consola en la carpeta /frontEnd del proyecto y ejecutar:

    > npm install && ng serve
  
3. Cuando el servidor de Angular esté corriendo pueden ver la pagina en: http://localhost:4200  

## Back End
Prueba de API_REST
Ruta: api/productos/"Producto"
Debe retornar un mensaje de conexión con la api
_Nota: se presupone que tiene instalado Node.js en su computador_
