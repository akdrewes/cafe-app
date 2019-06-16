import React from 'react'
import PropTypes from 'prop-types'
import {RatingCategoryStyle, Label, Rating,  RatingIcon} from './CafeCardStyles.js'

export default function DynamicRatingCategory({colour, fontSize, label, onToggleIcon, activeIndex, activeIcon, disabledIcon}) {
    return(
        <RatingCategoryStyle>
            <Label color={colour} fontSize={fontSize}>{label}</Label>
            <Rating>{new Array(5).fill('').map((placeholder, index) => <RatingIcon key={index} onClick={() => onToggleIcon(index)} src={index <= activeIndex ? activeIcon : disabledIcon} /> )}</Rating>
        </RatingCategoryStyle>
    )
}

DynamicRatingCategory.propTypes = {
    colour: PropTypes.string,
    fontSize: PropTypes.string,
    label: PropTypes.string,
    onToggleIcon: PropTypes.func.isRequired,
    activeIndex: PropTypes.number.isRequired,
    activeIcon: PropTypes.elementType.isRequired,
    disabledIcon: PropTypes.elementType.isRequired
}