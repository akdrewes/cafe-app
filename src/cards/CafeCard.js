import React, { useState } from 'react'
import {CardGrid, Image, CardBackgroundColor, CafeInfo, CafeTitle, CafeAddress} from './CafeCardStyles.js'
import OpeningHours from './OpeningHours'

export default function CafeCard({src, alt, title, street, district, monTime, tueTime, wedTime, thuTime, friTime, satTime, sunTime, hide, shorterBackground, shorterCard}) {
    
    const [isHidden, setOpeningHours] = useState(true)

    function onToggleOpeningHours() {
        setOpeningHours(!isHidden)
    }

    return (
        <CardGrid shorterCard={isHidden}>
            <Image src={src} alt={alt} />
            <CardBackgroundColor shorterBackground={isHidden}/>
            <CafeInfo>
                <CafeTitle>{title}</CafeTitle>
                <CafeAddress>{street}<br/>{district}</CafeAddress>
            </CafeInfo>
            <OpeningHours onToggleOpeningHours={onToggleOpeningHours} hide={isHidden} monTime={monTime} tueTime={tueTime} wedTime={wedTime} thuTime={thuTime} friTime={friTime} satTime={satTime} sunTime={sunTime}/>
        </CardGrid>
    )
}