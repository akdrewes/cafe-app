import React from 'react'
import CafeCard from '../cards/CafeCard'
import AppGrid from './AppGrid'
import Dummy from '../images/christin-hume-505823-unsplash.jpg'

export default function App() {
  return (
    <AppGrid>
      <CafeCard src={Dummy} alt={`Café Image`} title={`North Coast Coffee Roastery`} street={`Deichstraße 9`} district={`20459 Hamburg, Hamburg Mitte`} monTime={`09:00 - 18:00`} tueTime={`09:00 - 18:00`} wedTime={`09:00 - 18:00`} thuTime={`09:00 - 18:00`} friTime={`09:00 - 18:00`} satTime={`10:00 - 18:00`} sunTime={`10:00 - 18:00`}/>
    </AppGrid>
  )
}