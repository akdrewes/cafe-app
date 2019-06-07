import React, { useState } from 'react'
import {CardStyle, Image, CardBackgroundColor, CafeInfo, CafeTitle, CafeAddress} from './CafeCardStyles.js'
import CafeRating from './CafeRating'
import WeeklyOpeningHours from './WeeklyOpeningHours'

export default function CafeCard({card, onRatingChanges}) {
    
    const [isHidden, setOpeningHours] = useState(true)

    function handleToggleOpeningHours() {
        setOpeningHours(!isHidden)
    }

    return (
        <CardStyle shorterCard={isHidden}>
            <Image src={card.img} alt={card.alt} />
            <CardBackgroundColor shorterBackground={isHidden}/>
            <CafeInfo>
                <CafeTitle>{card.title}</CafeTitle>
                <CafeAddress>{card.street}<br/>{card.district}</CafeAddress>
            </CafeInfo>
            <CafeRating score={card.score} counter={card.counter} cardId={card._id} onRatingChanges={onRatingChanges} />
            <WeeklyOpeningHours onToggleOpeningHours={handleToggleOpeningHours} hidden={isHidden} openingHours={card.openingHours} />
        </CardStyle>
    )
}