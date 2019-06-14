import React from 'react'
import {RatingCategoryStyle, Label, Rating,  RatingIcon} from './CafeCardStyles.js'

export default function DynamicRatingCategory({colour, fontSize, label, onToggleIcon, activeIndex, activeIcon, disabledIcon}) {
    return(
        <RatingCategoryStyle>
            <Label color={colour} fontSize={fontSize}>{label}</Label>
            <Rating>{new Array(5).fill('').map((placeholder, index) => <RatingIcon key={index} onClick={() => onToggleIcon(index)} src={index <= activeIndex ? activeIcon : disabledIcon} /> )}</Rating>
        </RatingCategoryStyle>
    )
}