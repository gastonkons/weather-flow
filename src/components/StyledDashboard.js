import styled from 'styled-components'

export const StyledDashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
  grid-template-rows: auto;
  grid-gap: 0;
  height: 100vh;
`

export const StyledDashboardLeftSide = styled.div`
  background-color: #ccc;
  height: 100%;
`

export const StyledDashboardRightSide = styled.div`
  background-color: orange;
  height: 100%;
`
