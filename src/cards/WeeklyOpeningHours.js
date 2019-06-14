import React from 'react'
import {CafeOpeningHours, Table, Arrow} from './CafeCardStyles.js'
import DailyOpeningHours from './DailyOpeningHours'
import Arrowdown from '../images/arrowDown.png'
import Arrowup from '../images/arrowUp.png'

export default function WeeklyOpeningHours({onToggleOpeningHours, hidden, openingHours}) {

    const currHours = new Date().getHours()
    const weekday = new Date().getDay()

    const openingTime = openingHours[weekday].time.open
    const closingTime = openingHours[weekday].time.close
    const openingTimeNo = openingTime.slice(0,2)
    const closingTimeNo = closingTime.slice(0,2)

    return(
        <CafeOpeningHours>
            <div onClick={onToggleOpeningHours}>
                {hidden ? 
                (<label htmlFor='openingHours' >
                    {(openingTimeNo <= currHours, currHours <= closingTimeNo) ? 
                        `Open ${openingTime} - ${closingTime}` 
                        : 
                        `Closed`}
                </label>) :
                <label htmlFor='openingHours' >Opening Hours</label>}
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