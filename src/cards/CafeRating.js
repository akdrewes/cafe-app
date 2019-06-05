import React, {useState} from 'react'
import { getLocal } from "../services";
import OutsideClickHandler from 'react-outside-click-handler'
import {CafeRatingStyle, RatingButton, AllRatings} from './CafeCardStyles.js'
import StaticRating from './StaticRating'
import DynamicRating from './DynamicRating'

export default function CafeRating({score, counter, cardId, handleChanges}) {

    const {workAtmosphere, wlan, coffee} = score
    const [isStatic, setIsStatic] = useState(true)

    function handleToggleRating() {
        setIsStatic(!isStatic)
        if (!isStatic) {
            handleRating()
        }
    }

    function handleRating() {
        const userRating = getLocal('userRating')
        const newScore = {workAtmosphere: workAtmosphere + userRating[0], wlan: wlan + userRating[1], coffee: coffee + userRating[2]}
        const newCounter = counter + 1
        handleChanges(newScore, newCounter, cardId)
    }

    return (
        <OutsideClickHandler onOutsideClick={() => setIsStatic(true)} >
            <CafeRatingStyle>
                <RatingButton onClick={handleToggleRating} colour={isStatic}>{isStatic ? "Bewertung abgeben" : "POSTEN"}</RatingButton>
                <AllRatings >{isStatic ? <StaticRating score={score} counter={counter} /> : <DynamicRating />}</AllRatings>
            </CafeRatingStyle>
        </OutsideClickHandler>
    )
}