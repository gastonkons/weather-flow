import { citiesMostSearches } from '../mocks/citiesMock'
import { AsideSelectorContainer } from './styles/StyledAsideSelector'

const AsideSelector = ({ setCity }) => {
  const handleClick = (city) => {
    setCity(city)
  }

  return (
    <AsideSelectorContainer>
      <h2>Ciudades más buscadas</h2>
      <ul>
        {citiesMostSearches.map(city => (
          <li key={city} onClick={() => handleClick(city)}>{city}</li>
        ))}
      </ul>
    </AsideSelectorContainer>
  )
}

export default AsideSelector
