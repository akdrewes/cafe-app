import React, { useState, useEffect } from 'react'
import { setLocal } from "../services";
import {RatingCategory, Label, Rating, WorkIconStyle, WlanIconStyle, CupIconStyle} from '../cards/CafeCardStyles'
import WorkIcon from '../images/WorkAtmosphereY.png'
import WorkIconDisabled from '../images/WorkAtmosphereN.png'
import WlanIcon from '../images/WLANY.png'
import WlanIconDisabled from '../images/WLANN.png'
import CupIcon from '../images/CupY.png'
import CupIconDisabled from '../images/CupN.png'

export default function SetRating() {

    const [actWorkIndex, setActWorkIndex] = useState(-1)
    const [actWlanIndex, setActWlanIndex] = useState(-1)
    const [actCoffeeIndex, setActCoffeeIndex] = useState(-1)
    
    useEffect(() => {
        setLocal('firstRating', [actWorkIndex + 1, actWlanIndex + 1, actCoffeeIndex + 1])
    }, [actWorkIndex, actWlanIndex, actCoffeeIndex])

    const iconsArray = new Array(5).fill('')

    const handleToggleWorkIcon = (index) => {
        setActWorkIndex(index)
    }

    const handleToggleWlanIcon = (index) => {
        setActWlanIndex(index)
    }

    const handleToggleCoffeeIcon = (index) => {
        setActCoffeeIndex(index)
    }

    return (
        <>
            <RatingCategory>
                <Label>Arbeitsklima</Label>
                <Rating>
                {iconsArray.map((icon, index) => <WorkIconStyle key={index} onClick={() => handleToggleWorkIcon(index)} src={index <= actWorkIndex ? WorkIcon : WorkIconDisabled} /> )}
                </Rating>
            </RatingCategory>

            <RatingCategory>
                <Label>WLAN</Label>
                <Rating>
                {iconsArray.map((icon, index) => <WlanIconStyle key={index} onClick={() => handleToggleWlanIcon(index)} src={index <= actWlanIndex ? WlanIcon : WlanIconDisabled} /> )}
                </Rating>
            </RatingCategory>

            <RatingCategory>
                <Label>Kaffee</Label>
                <Rating>
                {iconsArray.map((icon, index) => <CupIconStyle key={index} onClick={() => handleToggleCoffeeIcon(index)} src={index <= actCoffeeIndex ? CupIcon : CupIconDisabled} /> )}
                </Rating>
            </RatingCategory>
        </>
    )
}