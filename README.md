# Yo Amo Ahorrar

Esta aplicación es para que Perla Maldonado pueda tener una agenda con sus pendientes y una base de datos con sus clientes y prospectos


## Development pasos

1. Renombrar el archivo `.env.template` por `.env`
2. Hacer los cambios respectivos en las variables de entorno

```
VITE_API_URL=https://yoamoahorrar.onrender.com/api
```

## Consulta de APIs de Banxico

1. Utilizar la URL del API de Banxico:

```
VITE_API_BANXICO=https://www.banxico.org.mx/SieAPIRest/service/v1/series/
```

2. Hay que poner el header `Bmx-Token` con el siguiente valor:

```
VITE_TOKEN_KEY=3ab2f571512bfc176fa3f32382f04780417e6453bf4c845011c6324af52521f2
```

3. Agregar al final del path lo siguiente:

```
Serie(s) a consultar separadas por coma, ejemplo: SP68257,SF63528
/datos 
Rango de fechas a consultar separadas por diagonal, ejemplo: `/2025-01-01/2025-10-31`
```

4. Las series son las siguientes:

```
VITE_API_BANXICO_SERIE_UDI=SP68257
VITE_API_BANXICO_SERIE_DOLAR=SF63528
```
