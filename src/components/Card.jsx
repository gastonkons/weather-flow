// import styled from 'styled-components'

import { CardContainer, CardDescription, CardDescriptionExtra, CardDescriptionExtraContainer, CardDescriptionTitle, CardNextDaysContainer, CardTemperature, CardToday } from './styles/StyledCard'
import { ReactComponent as RainIcon } from '../assets/icons/weather/rain.svg'
import { ReactComponent as WindIcon } from '../assets/icons/weather/wind.svg'
import { ReactComponent as PressureIcon } from '../assets/icons/weather/pressure.svg'
import SmallCard from './SmallCard'
import { useEffect, useState } from 'react'
import { getCityByCoordinates, getWeatherByCity, getWeatherByCityAndDays } from '../services/weather'
import useGeoposition from '../hooks/useGeoposition'

const Card = ({ error, loading, city, setCity, setLoading, setError }) => {
  const [weather, setWeather] = useState(null)
  const [nextDays, setNextDays] = useState(null)
  const { error: geoError, isEnabled, position } = useGeoposition()

  useEffect(() => {
    if (isEnabled && !geoError && position) {
      getCityByCoordinates(position.lat, position.lon).then(res => {
        setCity(res.data.city)
      })
    }
  }, [geoError, isEnabled, position, setCity, setLoading])

  useEffect(() => {
    if (city !== '') {
      setError({ error: false, msg: '' })
      setLoading(true)
      Promise.all([getWeatherByCity(city), getWeatherByCityAndDays(city)])
        .then(([weather, nextDays]) => {
          setWeather(weather.data)
          setNextDays(nextDays.data)
        })
        .catch(err => {
          setError({ error: true, msg: err.message })
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [city, setError, setLoading])

  if (error.error) {
    return (
      <CardContainer>
        <CardToday type='error'>
          {error.msg}
        </CardToday>
      </CardContainer>
    )
  }

  if (!error.error && loading) {
    return (
      <CardContainer>
        <CardToday type='text'>
          Buscando...
        </CardToday>
      </CardContainer>
    )
  }

  if (!error.error && (city === '' || !weather || !nextDays)) {
    return (
      <CardContainer>
        <CardToday type='text'>
          Ingresa el nombre de una ciudad para saber el clima
        </CardToday>
      </CardContainer>
    )
  }

  return (
    <div>
      <CardContainer>
        <CardToday>
          <CardDescription>
            <CardDescriptionTitle>
              <h2>{weather.city}, {weather.country}</h2>
              <p>{weather.date}</p>
            </CardDescriptionTitle>
            <CardDescriptionTitle>
              <p>{weather.description}</p>
              <img src={weather.icon} alt={weather.description} />
            </CardDescriptionTitle>
            <CardDescriptionExtraContainer>
              <CardDescriptionExtra>
                <RainIcon />
                <p>{weather.humidity}%</p>
              </CardDescriptionExtra>
              <CardDescriptionExtra>
                <PressureIcon />
                <p>{weather.pressure} hpa</p>
              </CardDescriptionExtra>
              <CardDescriptionExtra>
                <WindIcon />
                <p>{weather.wind} mt/s</p>
              </CardDescriptionExtra>
            </CardDescriptionExtraContainer>
          </CardDescription>
          <CardTemperature>
            <h3>{weather.temp}°C</h3>
            <p><span>Min: {weather.temp_min}°C</span><span>Max: {weather.temp_max}°C</span></p>
          </CardTemperature>
        </CardToday>
        <CardNextDaysContainer>
          {nextDays && nextDays.map(day => <SmallCard key={day.date} day={day} />)}
        </CardNextDaysContainer>
      </CardContainer>
    </div>
  )
}

export default Card
