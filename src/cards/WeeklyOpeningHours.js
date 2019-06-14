import React from 'react'
import {CafeOpeningHours, Table, Arrow} from './CafeCardStyles.js'
import DailyOpeningHours from './DailyOpeningHours'
import Arrowdown from '../images/arrowDown.png'
import Arrowup from '../images/arrowUp.png'

export default function WeeklyOpeningHours({onToggleOpeningHours, hidden, openingHours}) {

    //console.log(new Date().getMinutes())

    const weekday = new Date().getDay()

    return(
        <CafeOpeningHours>
            <div onClick={onToggleOpeningHours}>
                <label htmlFor='openingHours' >
                    {hidden ? `Open ${openingHours[weekday].time.open} - ${openingHours[weekday].time.close}` : `Opening Hours`}
                </label>
                <Arrow src={hidden ? Arrowdown : Arrowup} />
            </div>
            <Table id='openingHours' hidden={hidden}>
                <tbody>
                    {openingHours.map(daytime => <DailyOpeningHours key={daytime._id} day={daytime.day} time={daytime.time}/>)}
                </tbody>
            </Table>
        </CafeOpeningHours>
    )
}