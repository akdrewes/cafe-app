import React, {useState, useEffect} from 'react'
import {getCards, patchCard, getLocal, setLocal} from '../services'
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

  const handleChanges = (score, counter, id) => {
    console.log(score, counter, id)

    patchCard(score, counter, id)
    .then(changedCard => {
      const index = cards.findIndex(oldCard => oldCard._id === changedCard._id)
      setCards([
        ...cards.slice(0, index),
        changedCard,
        ...cards.slice(index + 1)
      ])
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <GlobalStyles />
      <FadeIn src={FadeinImage} />
      <AppGrid>
        {cards.map(card => <CafeCard key={card._id} card={card} handleChanges={handleChanges}/> )}
      </AppGrid>
      <FadeOut src={FadeoutImage} />
    </>
  )
}