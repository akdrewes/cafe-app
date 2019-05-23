import React from 'react'
import {CafeOpeningHours, Arrow, Table, Day} from './CafeCardStyles.js'
import Arrowdown from '../images/arrowDown.png'
import Arrowup from '../images/arrowUp.png'

export default function OpeningHours({onToggleOpeningHours, hide, monTime, tueTime, wedTime, thuTime, friTime, satTime, sunTime, hidden}) {

    return(
        <CafeOpeningHours>
            <label htmlFor='openingHours'>Öffnungszeiten</label>
            <Arrow onClick={onToggleOpeningHours} src={hide ? Arrowdown : Arrowup} />
            <Table id='openingHours' hidden={hide}>
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
    )

}