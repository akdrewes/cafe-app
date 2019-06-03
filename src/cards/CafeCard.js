import React, { useState } from 'react'
import {CardGrid, Image, CardBackgroundColor, CafeInfo, CafeTitle, CafeAddress} from './CafeCardStyles.js'
import CafeRating from './CafeRating'
import WeeklyOpeningHours from './WeeklyOpeningHours'

export default function CafeCard({card}) {
    
    const [isHidden, setOpeningHours] = useState(true)

    function handleToggleOpeningHours() {
        setOpeningHours(!isHidden)
    }

    return (
        <CardGrid shorterCard={isHidden}>
            <Image src={card.img} alt={card.alt} />
            <CardBackgroundColor shorterBackground={isHidden}/>
            <CafeInfo>
                <CafeTitle>{card.title}</CafeTitle>
                <CafeAddress>{card.street}<br/>{card.district}</CafeAddress>
            </CafeInfo>
            <CafeRating rating={card.rating} />
            <WeeklyOpeningHours onToggleOpeningHours={handleToggleOpeningHours} hidden={isHidden} openingHours={card.openingHours} />
        </CardGrid>
    )
}