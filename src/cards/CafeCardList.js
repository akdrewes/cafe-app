import React from 'react'
import styled from 'styled-components'
import CafeCard from './CafeCard'

export const CardListStyle = styled.main`
    grid-row: 2;
    padding: 20px 30px;
    overflow-y: scroll;
`

export default function CafeCardList({cards, onRatingChanges}) {
    return(
        <CardListStyle>
            {cards.map(card => <CafeCard key={card._id} card={card} onRatingChanges={onRatingChanges}/> )}
        </CardListStyle>
    )
}