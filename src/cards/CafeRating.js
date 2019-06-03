import React, {useState} from 'react'
import { getLocal } from "../services";
import {CafeRatingStyle, RatingButton, AllRatings} from './CafeCardStyles.js'
import StaticRating from './StaticRating'
import DynamicRating from './DynamicRating'

export default function CafeRating({rating}) {

    const {workAtmosphere, wlan, coffee} = rating
    const [isOff, setRating] = useState(true)
    const [counter, setCounter] = useState(1)
    const [score, setScore] = useState([workAtmosphere,  wlan, coffee])

    function handleToggleRating() {
        setRating(!isOff)
        if (!isOff) {
            setCounter(counter + 1)
            handleRating()
        }
    }

    function handleRating() {
        const userRating = getLocal('userRating')
        setScore([score[0] + userRating[0], score[1] + userRating[1], score[2] + userRating[2]])
    }

    return (
        <CafeRatingStyle>
            <RatingButton onClick={handleToggleRating} color={isOff}><em>{isOff ? "Bewertung abgeben" : "POSTEN"}</em></RatingButton>
            <AllRatings >{isOff ? <StaticRating counter={counter} score={score}/> : <DynamicRating />}</AllRatings>
        </CafeRatingStyle>
    )
}