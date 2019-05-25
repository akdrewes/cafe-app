import React, {useState} from 'react'
import GlobalStyles, {FadeOut, FadeIn} from '../misc/GlobalStyles'
import CafeCard from '../cards/CafeCard'
import AppGrid from './AppGrid'
import mockdata from '../mockdata'
import FadeinImage from '../images/fadein.png'
import FadeoutImage from '../images/fadeout.png'

export default function App() {

  const [cards, setCards] = useState(mockdata.cafeList || [])

  return (
    <>
      <GlobalStyles />
      <FadeIn src={FadeinImage} />
      <AppGrid>
        {cards.map(card => <CafeCard key={card.street} card={card} /> )}
      </AppGrid>
      <FadeOut src={FadeoutImage} />
    </>
  )
}