import InputSearch from '../../components/InputSearch'
import Card from '../../components/Card'
import { DashboardAside, DashboardContainer, DashboardHr, DashboardMain, DashboardTitle } from '../../components/styles/StyledDashboard'
import { useState } from 'react'
import Loader from '../../components/Loader'
import AsideSelector from '../../components/AsideSelector'

const Dashboard = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({ error: false, msg: '' })
  const [city, setCity] = useState('')

  return (
    <DashboardContainer>
      <DashboardAside>
        <DashboardTitle>
          Weather<span>Flow</span>
        </DashboardTitle>
        <AsideSelector setCity={setCity} setLoading={setLoading} />
      </DashboardAside>
      <DashboardMain>
        <InputSearch handleError={setError} error={error} setCity={setCity} />
        <DashboardHr />
        <Card error={error} loading={loading} city={city} setCity={setCity} setError={setError} setLoading={setLoading} />
      </DashboardMain>
      <Loader active={loading} />
    </DashboardContainer>
  )
}

export default Dashboard
