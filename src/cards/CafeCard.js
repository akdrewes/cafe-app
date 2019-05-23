import React, { useState } from 'react'
import {CardGrid, Image, CardBackgroundColor, CafeInfo, CafeTitle, CafeAddress, CafeOpeningHours, Arrow, Table, Day} from './CafeCardStyles.js'
import Arrowdown from '../images/arrowDown.png'
import Arrowup from '../images/arrowUp.png'

export default function CafeCard({src, alt, title, street, district, monTime, tueTime, wedTime, thuTime, friTime, satTime, sunTime}) {
    
    const [isHidden, setOpeningHours] = useState(true)

    function onToggleOpeningHours() {
        setOpeningHours(!isHidden)
    }

    return (
        <CardGrid>
            <Image src={src} alt={alt} />
            <CardBackgroundColor />
            <CafeInfo>
                <CafeTitle>{title}</CafeTitle>
                <CafeAddress>{street}<br/>{district}</CafeAddress>
            </CafeInfo>
            <CafeOpeningHours>
                <label>Öffnungszeiten</label>
                <Arrow onClick={onToggleOpeningHours} src={isHidden ? Arrowdown : Arrowup} />
                <Table className={isHidden ? 'hidden' : ''}>
                    <tbody>
                        <tr>
                            <Day>Mo</Day>
                            <td>{monTime}</td>
                        </tr>
                        <tr>
                            <Day>Di</Day>
                            <td>{tueTime}</td>
                        </tr>
                        <tr>
                            <Day>Mi</Day>
                            <td>{wedTime}</td>
                        </tr>
                        <tr>
                            <Day>Do</Day>
                            <td>{thuTime}</td>
                        </tr>
                        <tr>
                            <Day>Fr</Day>
                            <td>{friTime}</td>
                        </tr>
                        <tr>
                            <Day>Sa</Day>
                            <td>{satTime}</td>
                        </tr>
                        <tr>
                            <Day>So</Day>
                            <td>{sunTime}</td>
                        </tr>
                    </tbody>
                </Table>
            </CafeOpeningHours>
        </CardGrid>
    )
}