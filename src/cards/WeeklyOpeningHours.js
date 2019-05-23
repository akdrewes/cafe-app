import React from 'react'
import {CafeOpeningHours, Arrow, Table} from './CafeCardStyles.js'
import DailyOpeningHours from './DailyOpeningHours'
import Arrowdown from '../images/arrowDown.png'
import Arrowup from '../images/arrowUp.png'

export default function WeeklyOpeningHours({onToggleOpeningHours, hidden, openingHours}) {

    return(
        <CafeOpeningHours>
            <label htmlFor='openingHours'>Öffnungszeiten</label>
            <Arrow onClick={onToggleOpeningHours} src={hidden ? Arrowdown : Arrowup} />
            <Table id='openingHours' hidden={hidden}>
                <tbody>
                    {openingHours.map(daytime => <DailyOpeningHours key={daytime._id} day={daytime.day} time={daytime.time}/>)}
                </tbody>
            </Table>
        </CafeOpeningHours>
    )
}