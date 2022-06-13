import styled from 'styled-components'

export const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
  grid-template-rows: auto;
  grid-gap: 0px;
  height: 100vh;
  width:100%;
  & > div {
    padding:20px 0px;
  }

  @media (max-width: 1180px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`

export const DashboardAside = styled.div`
  background-color: #f5f5f5;
  width:100%;
  @media (max-width: 1180px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`

export const DashboardTitle = styled.h1`
  font-weight: 400;
  font-size: 1.8em;
  margin-bottom: 1em;
  text-align: center;
  & span {
    color: #57DFB7;
    font-weight: 700;
  }
  @media (max-width: 1180px) {
    font-size: 1.5em;
    margin: 10px 20px;
  }
`

export const DashboardMain = styled.div`
  background-color: #fff;
  width:100%;
`

export const DashboardHr = styled.hr`
  border: 1px solid #e5e5e5;
  margin: 20px 0;
  padding: 0px;
`
