import React, {useState, useEffect} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {getCards, patchCard, postCard} from '../services'
import GlobalStyles from '../misc/GlobalStyles'
import {Header, Logo} from '../app/HeaderStyles'
import AppGrid from './AppGrid'
import CafeCardsPage from '../cards/CafeCardsPage'
import CreatePage from '../create/CreatePage'

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

  const handleCreateCard = async ({img, alt, title, street, district, score, counter}) => {
    const newCard = await postCard({img, alt, title, street, district, score, counter})
    setCards([...cards, newCard])
  }

  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <AppGrid>
          <Header><Logo>coffeeWorkers</Logo></Header>
          <Switch>
            <Route path="/create" render={props => <CreatePage createCard={handleCreateCard} history={props.history} />} />
            <Route path="/" render={() => <CafeCardsPage cards={cards} onRatingChanges={handleRatingChanges}/>} />
          </Switch>
        </AppGrid>
      </BrowserRouter>
    </>
  )
}