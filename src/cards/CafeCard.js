import React, { useState } from 'react'
import {CardStyle, CardBackgroundColor, Image, CafeInfo, CafeTitle, CafeAddress} from './CafeCardStyles.js'
import CafeRating from './CafeRating'
import WeeklyOpeningHours from './WeeklyOpeningHours'

export default function CafeCard({card, onRatingChanges}) {
    
    const [isHidden, setOpeningHours] = useState(true)

    function handleToggleOpeningHours() {
        setOpeningHours(!isHidden)
    }

    return (
        <CardStyle shorterCard={isHidden}>
            <CardBackgroundColor shorterBackground={isHidden}/>
            <Image src={card.img} alt={card.alt} />
            <CafeInfo>
                <CafeTitle>{card.title}</CafeTitle>
                <CafeAddress>{card.street}<br/>{card.district}</CafeAddress>
            </CafeInfo>
            <CafeRating score={card.score} counter={card.counter} cardId={card._id} onRatingChanges={onRatingChanges} />
            <WeeklyOpeningHours openingHours={card.openingHours} hidden={isHidden} onToggleOpeningHours={handleToggleOpeningHours} />
        </CardStyle>
    )
}