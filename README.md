# WeatherFlow 🌤

WeatherFlow es una aplicación que te permite ver el clima en tu ciudad, también puedes ver el clima en cualquier ciudad del mundo. Fue creada con el propósito de evaluar una posición técnica para Frontend Developer.

Se puede ver el proyecto ya deployado [aquí](https://weather-flow.vercel.app/).

### Features
- Utilización de OpenWeather con la suscripción free
- Geolocation si está habilitado
- Responsive design
- Custom Hooks
- Manejo de errores
- Separación de responsabilidades
- Configuración de eslint con [standard](https://standardjs.com/readme-esla.html), y más..


## Instalación

Una vez descargado el repositorio, damos paso a la instalación con
```bash
npm install
```

## Config

Antes de inicializar el proyecto, al utilizar los servicios de [OpenWeather](https://openweathermap.org/) necesitamos de una API Key, en el caso de no contar con una, se deja a modo de prueba la siguiente
```
c916542639e8ec942af661fd76dcf593
```

Debemos ingresarla en el archivo ubicado en 
```
./.env
```
De la siguiente forma
```
REACT_APP_APIKEY_OPENWEATHER=c916542639e8ec942af661fd76dcf593
```

## Script disponible
Para levantar la aplicación vamos a usar

```bash
npm start
```
Para generar el build de la aplicación

```bash
npm run build
```
## Herramientas utilizadas
- Create React App


#### Los tiempos corren pero las ideas sobran ⚡

## Autor
Gastón Konstantinides - _Development, deployment and documentation_ - [gastonkons](http://gastonkons.ar)

## Licencia
[MIT](https://choosealicense.com/licenses/mit/)
