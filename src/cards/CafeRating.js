import React, {useState} from 'react'
import { getLocal } from "../services";
import OutsideClickHandler from 'react-outside-click-handler'
import {CafeRatingStyle, RatingButton, AllRatings} from './CafeCardStyles.js'
import StaticRating from './StaticRating'
import DynamicRating from './DynamicRating'

export default function CafeRating({rating}) {

    const {workAtmosphere, wlan, coffee} = rating
    const [isStatic, setIsStatic] = useState(true)
    const [counter, setCounter] = useState(1)
    const [score, setScore] = useState([workAtmosphere,  wlan, coffee])

    function handleToggleRating() {
        setIsStatic(!isStatic)
        if (!isStatic) {
            setCounter(counter + 1)
            handleRating()
        }
    }

    function handleRating() {
        const userRating = getLocal('userRating')
        setScore([score[0] + userRating[0], score[1] + userRating[1], score[2] + userRating[2]])
    }

    return (
        <OutsideClickHandler onOutsideClick={() => setIsStatic(true)} >
        <CafeRatingStyle>
            <RatingButton onClick={handleToggleRating} colour={isStatic}><em>{isStatic ? "Bewertung abgeben" : "POSTEN"}</em></RatingButton>
            <AllRatings >{isStatic ? <StaticRating counter={counter} score={score}/> : <DynamicRating />}</AllRatings>
        </CafeRatingStyle>
        </OutsideClickHandler>
    )
}