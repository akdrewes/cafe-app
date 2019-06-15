import React, {useState} from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import {getLocal} from "../services";
import {RatingSection, RatingButton, RatingView} from './CafeCardStyles.js'
import StaticRating from './StaticRating'
import DynamicRating from './DynamicRating'

export default function CafeRating({score, counter, cardId, onRatingChanges}) {

    const {workAtmosphere, wlan, coffee} = score
   
 
    const [isStatic, setIsStatic] = useState(true)

    function handleToggleRating() {
        setIsStatic(!isStatic)
        if (!isStatic) {
            handleUserRating()
        }
    }

    function handleUserRating() {
        const userRating = getLocal('userRating')
        const newScore = {workAtmosphere: workAtmosphere + userRating[0], wlan: wlan + userRating[1], coffee: coffee + userRating[2]}
        const newCounter = counter + 1
       
        onRatingChanges(newScore, newCounter, cardId)
    }

    return (
        <OutsideClickHandler onOutsideClick={() => setIsStatic(true)} >
            <RatingSection>
                <RatingView >{isStatic ? <StaticRating score={score} counter={counter} /> : <DynamicRating />}</RatingView>
                <RatingButton onClick={handleToggleRating} btnStyle={isStatic}>{isStatic ? `Add rating ★ ${counter} ${counter===1 ? `review`: `reviews`}` : "Submit"}</RatingButton>
            </RatingSection>
        </OutsideClickHandler>
    )
}