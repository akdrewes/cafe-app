import React from 'react'
import PropTypes from 'prop-types'
import { Day } from './CafeCardStyles.js'

export default function DailyOpeningHours({ day, time }) {
  return (
    <tr>
      <Day>{day}</Day>
      <td>
        {time.open} - {time.close}
      </td>
    </tr>
  )
}

DailyOpeningHours.propTypes = {
  day: PropTypes.string,
  time: PropTypes.objectOf(PropTypes.string),
}
