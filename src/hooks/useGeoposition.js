import { useEffect, useState } from 'react'

const useGeoposition = () => {
  const [position, setPosition] = useState(null)
  const [isEnabled, setIsEnabled] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (navigator.geolocation) {
      setIsEnabled(true)
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition({ lat: position.coords.latitude, lon: position.coords.longitude })
        },
        (error) => {
          setError(error)
        }
      )
    }
  }, [])

  return { position, error, isEnabled }
}

export default useGeoposition
