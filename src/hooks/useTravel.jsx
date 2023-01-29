import { createContext, useContext, useState } from 'react'
import { initialTravels } from '../data/travels'

const TravelContext = createContext()

export function TravelProvider({ children }) {
  const [travel, setTravel] = useState(initialTravels[0])

  function setSelectedTravel(key) {
    setTravel(initialTravels.find((travel) => travel.id == key))
  }

  return (
    <TravelContext.Provider value={{ travel, setSelectedTravel }}>
      {children}
    </TravelContext.Provider>
  )
}

export function useTravel() {
  return useContext(TravelContext)
}
