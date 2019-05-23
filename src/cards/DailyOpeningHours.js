import React from 'react'
import {Day} from './CafeCardStyles.js'

export default function DailyOpeningHours({day, time}) {
    
    return (
        <tr>
            <Day>{day}</Day>
            <td>{time}</td>
        </tr>
    )
}