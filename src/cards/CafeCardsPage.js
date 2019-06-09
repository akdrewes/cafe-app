import React from 'react'
import {CardsPageStyle, CardsPageHeader, CreateButton, CreateCrossStyle, CardListStyle} from './CafeCardStyles.js'
import CafeCardList from './CafeCardList'
import CreateCross from '../images/CreateCross.png'

export default function CafeCardsPage({cards, onRatingChanges}) {
    return(
        <CardsPageStyle>
            <CardsPageHeader>COFFEE WORKERS</CardsPageHeader>
            <CreateButton to={`/create`}><CreateCrossStyle src={CreateCross}/></CreateButton>
            <CardListStyle>
                <CafeCardList cards={cards} onRatingChanges={onRatingChanges} />
            </CardListStyle>
        </CardsPageStyle>
    )
}