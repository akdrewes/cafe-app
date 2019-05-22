import React from 'react'
import CafeCard from '../cards/CafeCard'
import AppGrid from './AppGrid'
import Dummy from '../images/christin-hume-505823-unsplash.jpg'

export default function App() {
  return (
    <AppGrid>
      <CafeCard src={Dummy} alt={`Café Image`} title={`North Coast Coffee Roastery`} address={`Deichstraße 9, Hamburg Mitte, Hamburg`} />
    </AppGrid>
  )
}