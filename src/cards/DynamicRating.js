import React, { useState, useEffect } from 'react'
import { setLocal } from "../services";
import RatingCategoryDyn from './RatingCategoryDyn'
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
            <RatingCategoryDyn colour={`#F2F5F5`} label={`Work climate`} activeIndex={activeWorkIndex} activeIcon={WorkIcon} disabledIcon={WorkIconDisabled} onToggleIcon={handleToggleWorkIcon} />

            <RatingCategoryDyn colour={`#F2F5F5`} label={`WLAN`} activeIndex={activeWlanIndex} activeIcon={WlanIcon} disabledIcon={WlanIconDisabled} onToggleIcon={handleToggleWlanIcon} />

            <RatingCategoryDyn colour={`#F2F5F5`} label={`Coffee`} activeIndex={activeCoffeeIndex} activeIcon={CupIcon} disabledIcon={CupIconDisabled} onToggleIcon={handleToggleCoffeeIcon} />
        </>
    )
}