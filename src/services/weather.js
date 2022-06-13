import Constants from '../constants'
import { middlewareDailyWeather, middlewareError, middlewareWeather } from '../middlewares'

const url = Constants.WEATHER_URL

export const getWeatherByCity = async (city) => {
  try {
    const response = await fetch(`${url}/weather?q=${city}&units=metric&lang=ES&appid=${process.env.REACT_APP_APIKEY_OPENWEATHER}`)
    if (response.status === 404) {
      throw new Error('No se encontró una ciudad con ese nombre')
    }
    if (response.status !== 200 && response.status !== 404) {
      throw new Error('Hubo un error al obtener el clima')
    }
    const data = await response.json()
    return middlewareWeather(data)
  } catch (e) {
    console.log(e)
    return middlewareError(e.message)
  }
}

export const getWeatherByCityAndDays = async (city) => {
  try {
    const response = await fetch(`${url}/forecast?q=${city}&units=metric&lang=ES&appid=${process.env.REACT_APP_APIKEY_OPENWEATHER}`)
    if (response.status === 404) {
      throw new Error('No se encontró una ciudad con ese nombre')
    }
    if (response.status !== 200 && response.status !== 404) {
      throw new Error('Hubo un error al obtener el clima')
    }
    const data = await response.json()
    return middlewareDailyWeather(data)
  } catch (e) {
    console.log(e)
    return middlewareError(e.message)
  }
}

export const getCityByCoordinates = async (lat, lon) => {
  try {
    const response = await fetch(`${url}/weather?lat=${lat}&lon=${lon}&units=metric&lang=ES&appid=${process.env.REACT_APP_APIKEY_OPENWEATHER}`)
    if (response.status !== 200 && response.status !== 404) {
      throw new Error('Hubo un error al obtener el clima')
    }
    const data = await response.json()
    return middlewareWeather(data)
  } catch (e) {
    console.log(e)
    return middlewareError(e.message)
  }
}
