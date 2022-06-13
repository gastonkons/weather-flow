import { formatFirstCharToUpperCase } from '../common/util'

export const middlewareError = (error) => {
  return ({
    status: 400,
    message: error,
    data: null
  })
}

export const middlewareWeather = (weather) => {
  return ({
    status: 200,
    data: {
      city: weather.name,
      country: weather.sys.country,
      temp: weather.main.temp.toFixed(1),
      temp_max: weather.main.temp_max.toFixed(1),
      temp_min: weather.main.temp_min.toFixed(1),
      description: formatFirstCharToUpperCase(weather.weather[0].description),
      icon: `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`,
      humidity: weather.main.humidity,
      wind: weather.wind.speed,
      pressure: weather.main.pressure,
      date: new Date(weather.dt * 1000).toLocaleDateString('es-AR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  })
}

export const middlewareDailyWeather = (weatherData) => {
  const weatherList = []

  let date = new Date(weatherData.list[0].dt * 1000).toLocaleDateString('es-AR')
  let count = 0

  for (let i = 0; i < weatherData.list.length; i++) {
    if (count === 5) {
      break
    }

    const weather = weatherData.list[i]
    if (date !== new Date(weather.dt * 1000).toLocaleDateString('es-AR')) {
      weatherList.push({
        date: date.slice(0, date.lastIndexOf('/')),
        weekday: formatFirstCharToUpperCase(new Date(weather.dt * 1000).toLocaleDateString('es-AR', { weekday: 'long' })),
        icon: `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`,
        temp: weather.main.temp.toFixed(1),
        description: formatFirstCharToUpperCase(weather.weather[0].description)
      })
      date = new Date(weather.dt * 1000).toLocaleDateString('es-AR')
      count++
    }
  }

  return ({
    status: 200,
    message: 'ok',
    data: weatherList
  })
}
