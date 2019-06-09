import React from 'react'
import {CardsPageStyle, CardsPageHeader, CardListStyle} from './CafeCardStyles.js'
import CafeCardList from './CafeCardList'

export default function CafeCardsPage({cards, onRatingChanges}) {
    return(
        <CardsPageStyle>
            <CardsPageHeader>COFFEE WORKERS</CardsPageHeader>
            <CardListStyle>
                <CafeCardList cards={cards} onRatingChanges={onRatingChanges} />
            </CardListStyle>
        </CardsPageStyle>
    )
}