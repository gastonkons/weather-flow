# WeatherFlow 馃尋

WeatherFlow es una aplicaci贸n que te permite ver el clima en tu ciudad, tambi茅n puedes ver el clima en cualquier ciudad del mundo. Fue creada con el prop贸sito de evaluar una posici贸n t茅cnica para Frontend Developer.

Se puede ver el proyecto ya deployado [aqu铆](https://weather-flow.vercel.app/).

### Features
- Utilizaci贸n de OpenWeather con la suscripci贸n free
- Geolocation si est谩 habilitado
- Responsive design
- Custom Hooks
- Manejo de errores
- Separaci贸n de responsabilidades
- Configuraci贸n de eslint con [standard](https://standardjs.com/readme-esla.html), y m谩s..


## Instalaci贸n

Una vez descargado el repositorio, damos paso a la instalaci贸n con
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
./src/.env
```
De la siguiente forma
```
REACT_APP_APIKEY_OPENWEATHER=c916542639e8ec942af661fd76dcf593
```

## Script disponible
Para levantar la aplicaci贸n vamos a usar

```bash
npm start
```
Para generar el build de la aplicaci贸n

```bash
npm run build
```
## Herramientas utilizadas
- Create React App


#### Los tiempos corren pero las ideas sobran 鈿?

## Autor
Gast贸n Konstantinides - _Development, deployment and documentation_ - [gastonkons](http://gastonkons.ar)

## Licencia
[MIT](https://choosealicense.com/licenses/mit/)