import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardToday = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 0px;
  color: ${props => props.error ? 'red' : 'inherit'};
  padding: ${({ type }) => type === 'error' || type === 'text' ? '30px' : '0px'};
  background-color: #fafafa;
  margin: 1.5em;
  border-radius: 10px;

  @media (max-width: 1180px) {
    grid-template-columns: 1fr;
    margin: 0.5em;
    
  }
`

export const CardDescription = styled.div`
  padding: 1.5em;
  @media (max-width: 1180px) {
    padding: 1em 1em 0 1em;
  }
`

export const CardDescriptionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1180px) {
    & > h2 {
      font-size: 1.2em;
    }

    & > p {
      font-size: 0.8em;
    }
  }
`

export const CardDescriptionExtraContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
  margin: 20px 0;

  @media (max-width: 1180px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
    margin: 10px 0;
  }
`

export const CardDescriptionExtra = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;

  & > svg {
    color: #57DFB7;
    width: 1.5em;
    margin-right: 1em;
  }

  @media (max-width: 1180px) {
    justify-content: flex-start;
  }
`

export const CardTemperature = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  border-radius: 10px;
  background-image: url('https://cdn.pixabay.com/photo/2018/09/19/22/14/skyline-3689662_960_720.jpg');
  background: linear-gradient(to right, #fafafaff 0%, #fafafa00 80%), url('https://cdn.pixabay.com/photo/2018/09/19/22/14/skyline-3689662_960_720.jpg');
  & > h3 {
    font-size: 6em;
    font-weight: normal;
  }
  & span {
    margin: 0 1em;
  }

  @media (max-width: 1180px) {
    padding: 20px;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    background: linear-gradient(to bottom, #fafafaff 0%, #fafafaff 20%, #fafafa22 100%), url('https://cdn.pixabay.com/photo/2018/09/19/22/14/skyline-3689662_960_720.jpg');

  }
`

export const CardNextDaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  @media (max-width: 1180px) {
    grid-template-columns: 1fr;
  }
`
