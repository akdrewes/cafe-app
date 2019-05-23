import React, {useState} from 'react'
import CafeCard from '../cards/CafeCard'
import AppGrid from './AppGrid'
import mockdata from '../mockdata'

export default function App() {

  const [cards, setCards] = useState(mockdata.cafeList || [])

  return (
    <AppGrid>
      {cards.map(card => <CafeCard card={card} /> )}
    </AppGrid>
  )
}