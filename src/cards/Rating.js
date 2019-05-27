import React from 'react'
import styled from 'styled-components'
import StaticRating from './StaticRating'
import DynamicRating from './DynamicRating'

const Button = styled.div`
grid-row: 1 / 2;
grid-column: 2 / 3;
display: flex;
justify-content: flex-end;
color: #53736A;
font-family: Tahoma, sans-serif;
font-size: 12px;
letter-spacing: 0.64px;
`

const AllRatings = styled.div`
display: grid;
grid-row: 2 / 3;
grid-column: 2 / 3;
`

export default function Rating({rating, onToggleRating, off}) {
    
    return (
        <>
        <Button onClick={onToggleRating}><em>{off ? "Bewertung abgeben" : "Posten"}</em></Button>
        <AllRatings >{off ? <StaticRating rating ={rating}/> : <DynamicRating />}</AllRatings>
        </>
    )
}