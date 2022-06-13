import { SmallCardContainer, SmallCardInfo } from './styles/StyledSmallCard'

const SmallCard = ({ day }) => {
  return (
    <SmallCardContainer>
      <SmallCardInfo>
        <p className='SmallCard-Weekday'>{day.weekday}</p>
        <p className='SmallCard-Date'>{day.date}</p>
      </SmallCardInfo>
      <SmallCardInfo>
        <p className='SmallCard-Temp'>{day.temp}°C</p>
        <img className='SmallCard-Img' src={day.icon} alt={day.description} />
      </SmallCardInfo>
    </SmallCardContainer>
  )
}

export default SmallCard
