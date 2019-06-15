import React from 'react'
import styled from 'styled-components'
import CafeCard from './CafeCard'

export const CardListStyle = styled.main`
    grid-row: 2;
    padding: 30px 30px;
    overflow-y: scroll;
`

export default function CafeCardList({cards, onRatingChanges}) {

    function handleSorting(card) {
        const averageRating = (card.score.workAtmosphere + card.score.wlan + card.score.coffee)/(card.counter*3).toFixed(2)
        return averageRating
    }
    
    return(
        <CardListStyle>
            {cards.slice()
                .sort((a,b) => handleSorting(b) - handleSorting(a))
                .map(card => <CafeCard key={card._id} card={card} onRatingChanges={onRatingChanges}/>)
            }
        </CardListStyle>
    )
}