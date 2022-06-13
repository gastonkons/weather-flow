import styled from 'styled-components'

export const SmallCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1em;
  padding: 1em 1em 0px 1em;
  border-radius: 10px;
  background-color: #fafafa;
`

export const SmallCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width:100%;
  margin-bottom: 10px;
  align-items: center;

  & .SmallCard-Weekday {
    font-size: 1.2em;
  }

  & .SmallCard-Date {
    font-size: 0.8em;
    color: #828282;
  }

  & .SmallCard-Temp {
    font-size: 1.5em;
    font-weight: 700;
  }

  & .SmallCard-Img {
    width: 50px;
  }
`
