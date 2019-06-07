import React, {useState, useEffect} from 'react'
import {getCards, patchCard, postCard} from '../services'
import GlobalStyles, {FadeIn, FadeOut} from '../misc/GlobalStyles'
import AppGrid from './AppGrid'
import CafeCard from '../cards/CafeCard'
import Form from '../create/Form'
import FadeinImage from '../images/fadein.png'
import FadeoutImage from '../images/fadeout.png'

export default function App() {

  const [cards, setCards] = useState([])

  useEffect(() => {
    getCards()
    .then(data => setCards(data))
    .catch(err => console.log(err))}, [])

  const handleRatingChanges = (score, counter, id) => {
    patchCard(score, counter, id)
    .then(changedCard => {
      const index = cards.findIndex(currCard => currCard._id === changedCard._id)
      setCards([
        ...cards.slice(0, index),
        changedCard,
        ...cards.slice(index + 1)
      ])
    })
    .catch(err => console.log(err))
  }

  const handleCreateCard = (img, alt, title, street, district, score, counter, openingHours) => {
    postCard({img, alt, title, street, district, score, counter, openingHours})
    .then(card => setCards([card, ...cards]))
    .catch(err => console.log(err))
  }

  return (
    <>
      <GlobalStyles />
      
      <Form onCreateCard={handleCreateCard} ></Form>
      <AppGrid>
        {cards.map(card => <CafeCard key={card._id} card={card} handleRatingChanges={handleRatingChanges}/> )}
      </AppGrid>
      <FadeOut src={FadeoutImage} />
    </>
  )
}

//<FadeIn src={FadeinImage} />