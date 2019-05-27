import React, { useState } from 'react'
import {CardGrid, Image, CardBackgroundColor, CafeInfo, CafeTitle, CafeAddress, CafeRating} from './CafeCardStyles.js'
import Labels from './Labels'
import Rating from './Rating'
import WeeklyOpeningHours from './WeeklyOpeningHours'

export default function CafeCard({card}) {
    
    const [isHidden, setOpeningHours] = useState(true)
    const [isOff, setRating] = useState(true)

    function handleToggleOpeningHours() {
        setOpeningHours(!isHidden)
    }

    function handleToggleRating() {
        setRating(!isOff)
    }

    return (
        <CardGrid shorterCard={isHidden}>
            <Image src={card.src} alt={card.alt} />
            <CardBackgroundColor shorterBackground={isHidden}/>
            <CafeInfo>
                <CafeTitle>{card.title}</CafeTitle>
                <CafeAddress>{card.street}<br/>{card.district}</CafeAddress>
            </CafeInfo>
            <CafeRating>
                <Labels />
                <Rating rating={card.rating} onToggleRating={handleToggleRating} off={isOff}/>
            </CafeRating>
            <WeeklyOpeningHours onToggleOpeningHours={handleToggleOpeningHours} hidden={isHidden} openingHours={card.openingHours} />
        </CardGrid>
    )
}