import React from 'react'
import {CardsPageStyle, CardsPageHeader, CreateButton, CreateCrossStyle, CardListStyle, CardsPageFooter} from './CafeCardStyles.js'
import CafeCardList from './CafeCardList'
import CreateCross from '../images/CreateCross.png'

export default function CafeCardsPage({cards, onRatingChanges}) {
    return(
        <CardsPageStyle>
            <CardsPageHeader>COFFEE WORKERS</CardsPageHeader>
            <CardListStyle>
                <CafeCardList cards={cards} onRatingChanges={onRatingChanges} />
            </CardListStyle>
            <CardsPageFooter><CreateButton to={`/create`}><CreateCrossStyle src={CreateCross}/></CreateButton></CardsPageFooter>
        </CardsPageStyle>
    )
}