import React from 'react'
import {CafeOpeningHours, Table, Arrow} from './CafeCardStyles.js'
import DailyOpeningHours from './DailyOpeningHours'
import Arrowdown from '../images/arrowDown.png'
import Arrowup from '../images/arrowUp.png'

export default function WeeklyOpeningHours({onToggleOpeningHours, hidden, openingHours}) {

    const currHours = new Date().getHours()
    const currMin = (new Date().getMinutes()<10 ? '0' : '') + new Date().getMinutes()
    const currTime = parseInt(''.concat(currHours,currMin))
    const weekday = new Date().getDay()

    const openingTime = openingHours[weekday].time.open
    const closingTime = openingHours[weekday].time.close

    const openingTimeHours = openingTime.slice(0,2)
    const closingTimeHours = closingTime.slice(0,2)
    const openingTimeMin = openingTime.slice(-2)
    const closingTimeMin = closingTime.slice(-2)

    const openingTimeHM = parseInt(''.concat(openingTimeHours, openingTimeMin))
    const closingTimeHM = parseInt(''.concat(closingTimeHours, closingTimeMin))

    return(
        <CafeOpeningHours>
            <div onClick={onToggleOpeningHours}>
                {hidden ? 
                (<label htmlFor='openingHours' >
                    {(openingTimeHM <= currTime, currTime <= closingTimeHM) ? 
                    `Open ${openingTime} - ${closingTime}` 
                        : 
                        `Opening Hours: Closed`}
                </label>) :
                <label htmlFor='openingHours' >Opening Hours</label>
                }
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