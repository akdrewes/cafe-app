import React from 'react'
import PropTypes from 'prop-types'
import {
  RatingCategoryStyle,
  Label,
  Rating,
  RatingIcon,
} from './CafeCardStyles.js'

export default function StaticRatingCategory({ colour, label, length, icon }) {
  return (
    <RatingCategoryStyle>
      <Label color={colour}>{label}</Label>
      <Rating>
        {new Array(length).fill('').map((placeholder, index) => (
          <RatingIcon key={index} src={icon} />
        ))}
      </Rating>
    </RatingCategoryStyle>
  )
}

StaticRatingCategory.propTypes = {
  colour: PropTypes.string,
  label: PropTypes.string,
  length: PropTypes.number.isRequired,
  icon: PropTypes.elementType.isRequired,
}
