import React from 'react'
import PropTypes from 'prop-types'
import { CafeOpeningHours, Table, Arrow } from './CafeCardStyles.js'
import DailyOpeningHours from './DailyOpeningHours'
import Arrowdown from '../images/arrowDown.png'
import Arrowup from '../images/arrowUp.png'

export default function WeeklyOpeningHours({
  onToggleOpeningHours,
  hidden,
  openingHours,
}) {
  const openingHoursDefined = openingHours.length !== 0

  function handleLabel() {
    let label
    if (!openingHoursDefined) {
      label = <label>Opening Hours: tbd</label>
    } else {
      label = handleLabelWithDefinedOpeningHours()
    }
    return label
  }

  function handleLabelWithDefinedOpeningHours() {
    const currHours = new Date().getHours()
    const currMin =
      (new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes()
    const currTime = parseInt(''.concat(currHours, currMin))
    const weekday = new Date().getDay()

    const openingTime = openingHours[weekday].time.open
    const closingTime = openingHours[weekday].time.close

    const openingTimeHours = openingTime.slice(0, 2)
    const closingTimeHours = closingTime.slice(0, 2)
    const openingTimeMin = openingTime.slice(-2)
    const closingTimeMin = closingTime.slice(-2)

    const openingTimeHM = parseInt(''.concat(openingTimeHours, openingTimeMin))
    const closingTimeHM = parseInt(''.concat(closingTimeHours, closingTimeMin))

    let label

    if (openingTimeHM <= currTime && currTime <= closingTimeHM) {
      label = (
        <label>
          Open {openingTime} - {closingTime}
        </label>
      )
    } else {
      label = <label>Opening Hours: Closed</label>
    }

    return label
  }

  return (
    <CafeOpeningHours>
      <div onClick={onToggleOpeningHours}>
        {hidden ? (
          handleLabel()
        ) : (
          <label htmlFor="openingHours">Opening Hours</label>
        )}
        {openingHoursDefined ? (
          <Arrow src={hidden ? Arrowdown : Arrowup} />
        ) : (
          ''
        )}
      </div>
      <Table id="openingHours" hidden={hidden}>
        <tbody>
          {openingHours.map(daytime => (
            <DailyOpeningHours
              key={daytime._id}
              day={daytime.day}
              time={daytime.time}
            />
          ))}
        </tbody>
      </Table>
    </CafeOpeningHours>
  )
}

WeeklyOpeningHours.propTypes = {
  onToggleOpeningHours: PropTypes.func.isRequired,
  hidden: PropTypes.bool.isRequired,
  openingHours: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      time: PropTypes.objectOf(PropTypes.string),
    })
  ),
}
