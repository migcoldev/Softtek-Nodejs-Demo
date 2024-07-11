# Proyecto Serverless en Node.js

Este proyecto demuestra la implementación de una aplicación serverless utilizando Node.js. Se enfoca en crear funciones que se pueden desplegar en un proveedor de servicios cloud como AWS.
Se ha utilizado Serverless V4 para el Cloudformation, considerarlo al momento de ejecutar el deploy ya que solicitará login.

## Requisitos Previos

Para ejecutar este proyecto, necesitarás lo siguiente:

- Node.js (versión 18.x o superior)
- npm (viene instalado con Node.js)
- Un cuenta en un proveedor de servicios cloud AWS
- Credenciales IAM (Access Key ID y Secret Key) con permisos de Cloudformation (Lambda, Api Gateway, RDS, DynamoDB, otros). No olvide elegir una región a trabajar (este proyecto esta oriendato a trabajar con us-east-1)
- [Serverless Framework](https://www.serverless.com/) instalado globalmente (`npm install -g serverless`)

## Configuración

1. Clona este repositorio en tu máquina local.
2. Navega al directorio del proyecto y ejecuta `npm install` para instalar las dependencias. En el caso de presentar problemas con dependencias ejecutar `npm install --legacy-peer-deps`
3. Crea un archivo .env en tu proyecto con las variables del archivo .env.sample
4. Configura tus credenciales de proveedor de servicios cloud en el archivo .env del proyecto

## Despliegue

Para desplegar las funciones en tu proveedor de servicios cloud, ejecuta:

```bash
serverless deploy
```

## Test

Luego del despliegue, los endpoint trabajados son con el stage "demo"
Ejemplo : AWS_ENDPOINT = https://1madjqatp5.execute-api.us-east-1.amazonaws.com/demo
- GET AWS_ENDPOINT/films
- GET AWS_ENDPOINT/people
- GET AWS_ENDPOINT/planets
- POST AWS_ENDPOINT/planet

## Swagger

https://kru0ruqac5.execute-api.us-east-1.amazonaws.com/swagger