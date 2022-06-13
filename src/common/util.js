export const formatFirstCharToUpperCase = (description) => {
  const descriptionWeather = description.toLowerCase()
  const descriptionWeatherFormatted = descriptionWeather.charAt(0).toUpperCase() + descriptionWeather.slice(1)
  return descriptionWeatherFormatted
}
