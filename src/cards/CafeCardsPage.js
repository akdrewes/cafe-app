import React from 'react'
import {CardsPageStyle} from './CafeCardStyles.js'
import CafeCardList from './CafeCardList'

export default function CafeCardsPage({cards, onRatingChanges}) {
    return(
        <CardsPageStyle>
            <CafeCardList cards={cards} onRatingChanges={onRatingChanges} />
        </CardsPageStyle>
    )
}