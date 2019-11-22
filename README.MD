# LUA backEnd
El puerto **3000** es el puerto predefinido por el cual la API estará atendiendo las peticiones.
Se puede alterar de la siguiente forma.

1. Ubicar el archivo [index](/index.js).
2. Alterar el puerto en la siguiente linea de codigo.

```
express.listen(3000, () => console.log('Running express'));

```

## Rutas relevantes
