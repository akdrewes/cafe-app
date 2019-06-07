import React, {useState, useEffect} from 'react'
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom'
import {getCards, patchCard, postCard} from '../services'
import GlobalStyles from '../misc/GlobalStyles'
import CafeCardsPage from '../cards/CafeCardsPage'
import Form from '../create/Form'

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
      <BrowserRouter>
        <GlobalStyles />
        <Switch>
          <Route path="/create" render={() => <Form onCreateCard={handleCreateCard} ></Form>} />
          <Route exact path="/" render={() => <CafeCardsPage cards={cards} onRatingChanges={handleRatingChanges}/>} />
        </Switch>
      </BrowserRouter>
    </>
  )
}