import React, {useState} from 'react'
import styled from 'styled-components'
import StaticRating from './StaticRating'
import DynamicRating from './DynamicRating'

export const CafeRatingStyle  = styled.section`
grid-column: 2 / 3;
position: absolute;
top: 370px;
height: 100px;
display: grid;
grid-template-rows: 20% 80%;
grid-row-gap: 5px;
grid-template-columns: 1fr;
/*background: rgba(83,115,106,0.4);
outline: rgba(83,115,106,0.4) solid 13px;*/
`

const Button = styled.button`
grid-row: 1 / 2;
display: flex;
justify-content: flex-end;
padding: 0;
color: #53736A;
font-family: Tahoma, sans-serif;
font-size: 12px;
letter-spacing: 0.64px;
`

const AllRatings = styled.div`
display: grid;
grid-row: 2 / 3;
grid-column: 1 / 3;
`

export default function CafeRating({rating}) {

    const [isOff, setRating] = useState(true);

    function handleToggleRating() {
        setRating(!isOff)
    }

    return (
        <CafeRatingStyle>
            <Button onClick={handleToggleRating}><em>{isOff ? "Bewertung abgeben" : "Posten"}</em></Button>
            <AllRatings >{isOff ? <StaticRating rating ={rating}/> : <DynamicRating />}</AllRatings>
        </CafeRatingStyle>
    )
}