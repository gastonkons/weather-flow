import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
// const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-31.4250374&lon=-64.1475419&units=metric&appid=c916542639e8ec942af661fd76dcf593'
function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='*' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
