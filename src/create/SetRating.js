import React, { useState, useEffect } from 'react'
import { setLocal } from "../services";
import {RatingCategory, Rating, WorkIconStyle, WlanIconStyle, CupIconStyle} from '../cards/CafeCardStyles'
import {AllRatings, RatingLabel} from './CreatePageStyles'
import WorkIcon from '../images/WorkAtmosphereY.png'
import WorkIconDisabled from '../images/WorkAtmosphereCreate.png'
import WlanIcon from '../images/WLANY.png'
import WlanIconDisabled from '../images/WLANCreate.png'
import CupIcon from '../images/CupCreateY.png'
import CupIconDisabled from '../images/CupCreateN.png'

export default function SetRating() {

    const [activeWorkIndex, setActiveWorkIndex] = useState(-1)
    const [activeWlanIndex, setActiveWlanIndex] = useState(-1)
    const [activeCoffeeIndex, setActiveCoffeeIndex] = useState(-1)
    
    useEffect(() => {
        setLocal('firstRating', [activeWorkIndex + 1, activeWlanIndex + 1, activeCoffeeIndex + 1])
    }, [activeWorkIndex, activeWlanIndex, activeCoffeeIndex])

    const iconsArray = new Array(5).fill('')

    const handleToggleWorkIcon = (index) => {
        setActiveWorkIndex(index)
    }

    const handleToggleWlanIcon = (index) => {
        setActiveWlanIndex(index)
    }

    const handleToggleCoffeeIcon = (index) => {
        setActiveCoffeeIndex(index)
    }

    return (
        <AllRatings>
            <RatingCategory>
                <RatingLabel>Arbeitsklima</RatingLabel>
                <Rating>
                {iconsArray.map((icon, index) => <WorkIconStyle key={index} onClick={() => handleToggleWorkIcon(index)} src={index <= activeWorkIndex ? WorkIcon : WorkIconDisabled} /> )}
                </Rating>
            </RatingCategory>

            <RatingCategory>
                <RatingLabel>WLAN</RatingLabel>
                <Rating>
                {iconsArray.map((icon, index) => <WlanIconStyle key={index} onClick={() => handleToggleWlanIcon(index)} src={index <= activeWlanIndex ? WlanIcon : WlanIconDisabled} /> )}
                </Rating>
            </RatingCategory>

            <RatingCategory>
                <RatingLabel>Kaffee</RatingLabel>
                <Rating>
                {iconsArray.map((icon, index) => <CupIconStyle key={index} onClick={() => handleToggleCoffeeIcon(index)} src={index <= activeCoffeeIndex ? CupIcon : CupIconDisabled} /> )}
                </Rating>
            </RatingCategory>
        </AllRatings>
    )
}