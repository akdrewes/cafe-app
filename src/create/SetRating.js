import React, { useState, useEffect } from 'react'
import { setLocal } from '../services'
import DynamicRatingCategory from '../cards/DynamicRatingCategory'
import { AllRatings } from './FormStyles'
import WorkIcon from '../images/WorkAtmosphereY.png'
import WorkIconDisabled from '../images/WorkAtmosphereCreate.png'
import WlanIcon from '../images/WLANY.png'
import WlanIconDisabled from '../images/WLANCreate.png'
import CupIcon from '../images/CupCreateY.png'
import CupIconDisabled from '../images/CupCreateN.png'

export default function SetRating() {
  
    const [activeWorkIndex, setActiveWorkIndex] = useState()
    const [activeWlanIndex, setActiveWlanIndex] = useState()
    const [activeCoffeeIndex, setActiveCoffeeIndex] = useState()
    
    useEffect(() => {
        setLocal('firstRating', [
          activeWorkIndex + 1,
          activeWlanIndex + 1,
          activeCoffeeIndex + 1
        ])
    }, [activeWorkIndex, activeWlanIndex, activeCoffeeIndex])

  const handleToggleWorkIcon = index => {
    setActiveWorkIndex(index)
  }

  const handleToggleWlanIcon = index => {
    setActiveWlanIndex(index)
  }

  const handleToggleCoffeeIcon = index => {
    setActiveCoffeeIndex(index)
  }

  return (
    <AllRatings>
      <DynamicRatingCategory
        fontSize={`12px`}
        label={`Work climate`}
        activeIndex={activeWorkIndex}
        activeIcon={WorkIcon}
        disabledIcon={WorkIconDisabled}
        onToggleIcon={handleToggleWorkIcon}
      />

      <DynamicRatingCategory
        fontSize={`12px`}
        label={`WLAN`}
        activeIndex={activeWlanIndex}
        activeIcon={WlanIcon}
        disabledIcon={WlanIconDisabled}
        onToggleIcon={handleToggleWlanIcon}
      />

      <DynamicRatingCategory
        fontSize={`12px`}
        label={`Coffee`}
        activeIndex={activeCoffeeIndex}
        activeIcon={CupIcon}
        disabledIcon={CupIconDisabled}
        onToggleIcon={handleToggleCoffeeIcon}
      />
    </AllRatings>
  )
}
