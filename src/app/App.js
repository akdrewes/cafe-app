import React, {useState} from 'react'
import GlobalStyles from '../misc/GlobalStyles'
import CafeCard from '../cards/CafeCard'
import AppGrid from './AppGrid'
import mockdata from '../mockdata'

export default function App() {

  const [cards, setCards] = useState(mockdata.cafeList || [])

  return (
    <>
      <GlobalStyles />
      <AppGrid>
        {cards.map(card => <CafeCard key={card.street} card={card} /> )}
      </AppGrid>
    </>
  )
}