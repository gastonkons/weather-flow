import { StyledDashboardContainer, StyledDashboardLeftSide, StyledDashboardRightSide } from '../../components/StyledDashboard'

const Dashboard = () => {
  return (
    <StyledDashboardContainer>
      <StyledDashboardLeftSide>
        <h1>Dashboard</h1>
      </StyledDashboardLeftSide>
      <StyledDashboardRightSide>
        <h2>Dashboard2</h2>
      </StyledDashboardRightSide>
    </StyledDashboardContainer>
  )
}

export default Dashboard
