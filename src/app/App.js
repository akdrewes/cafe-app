import React, {useState, useEffect} from 'react'
import {getCards, postCard, getLocal, setLocal} from '../services'
import GlobalStyles, {FadeIn, FadeOut} from '../misc/GlobalStyles'
import AppGrid from './AppGrid'
import CafeCard from '../cards/CafeCard'
import FadeinImage from '../images/fadein.png'
import FadeoutImage from '../images/fadeout.png'

export default function App() {

  const [cards, setCards] = useState(getLocal('cards') || [])

  useEffect(() => {
    getCards()
    .then(data => setCards(data))
    .catch(err => console.log(err))}, [])

  useEffect(() => {
    setLocal('cards', cards)
  }, [cards])

  return (
    <>
      <GlobalStyles />
      <FadeIn src={FadeinImage} />
      <AppGrid>
        {cards.map(card => <CafeCard key={card._id} card={card} /> )}
      </AppGrid>
      <FadeOut src={FadeoutImage} />
    </>
  )
}