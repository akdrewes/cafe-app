import React, { useState } from 'react'
import {CardGrid, Image, CardBackgroundColor, CafeInfo, CafeTitle, CafeAddress} from './CafeCardStyles.js'
import CafeRating from './CafeRating'
import WeeklyOpeningHours from './WeeklyOpeningHours'

export default function CafeCard({card, handleChanges}) {
    
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
            <CafeRating score={card.score} counter={card.counter} cardId={card._id} handleChanges={handleChanges} />
            <WeeklyOpeningHours onToggleOpeningHours={handleToggleOpeningHours} hidden={isHidden} openingHours={card.openingHours} />
        </CardGrid>
    )
}