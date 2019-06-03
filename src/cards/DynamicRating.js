import React, { useState, useEffect } from 'react'
import { setLocal } from "../services";
import {RatingCategory, Label, Rating, WorkIconStyle, WlanIconStyle, CupIconStyle} from './CafeCardStyles.js'
import WorkIcon from '../images/WorkAtmosphereY.png'
import WorkIconDisabled from '../images/WorkAtmosphereN.png'
import WlanIcon from '../images/WLANY.png'
import WlanIconDisabled from '../images/WLANN.png'
import CupIcon from '../images/CupY.png'
import CupIconDisabled from '../images/CupN.png'

export default function DynamicRating() {

    const [activeWorkIndex, setActiveWorkIndex] = useState(null)
    const [activeWlanIndex, setActiveWlanIndex] = useState(null)
    const [activeCoffeeIndex, setActiveCoffeeIndex] = useState(null)
    
    useEffect(() => {
        setLocal('userRating', [activeWorkIndex + 1, activeWlanIndex + 1, activeCoffeeIndex + 1])
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
        <>
            <RatingCategory>
                <Label>Arbeitsklima</Label>
                <Rating>
                {iconsArray.map((icon, index) => <WorkIconStyle onClick={() => handleToggleWorkIcon(index)} src={index <= activeWorkIndex ? WorkIcon : WorkIconDisabled} /> )}
                </Rating>
            </RatingCategory>

            <RatingCategory>
                <Label>WLAN</Label>
                <Rating>
                {iconsArray.map((icon, index) => <WlanIconStyle onClick={() => handleToggleWlanIcon(index)} src={index <= activeWlanIndex ? WlanIcon : WlanIconDisabled} /> )}
                </Rating>
            </RatingCategory>

            <RatingCategory>
                <Label>Kaffee</Label>
                <Rating>
                {iconsArray.map((icon, index) => <CupIconStyle onClick={() => handleToggleCoffeeIcon(index)} src={index <= activeCoffeeIndex ? CupIcon : CupIconDisabled} /> )}
                </Rating>
            </RatingCategory>
        </>
    )
}

// <Rating label="Arbeitsklima" active={true} icon={WorkIcon} activeIcon={WorkIconActive} activeIndex={2} onIconClick={index => console.log(index)}/>
// <Rating icon={Wlan} activeIcon={WorkIconActive} />
// <Rating icon={WorkIcon} activeIcon={WorkIconActive} /> 