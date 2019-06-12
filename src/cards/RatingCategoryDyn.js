import React from 'react'
import {RatingCategoryStyle, Label, Rating,  RatingIcon} from './CafeCardStyles.js'

export default function RatingCategoryDy({label, onToggleIcon, activeIndex, activeIcon, disabledIcon}) {
    return(
        <RatingCategoryStyle>
            <Label>{label}</Label>
            <Rating>{new Array(5).fill('').map((placeholder, index) => <RatingIcon key={index} onClick={() => onToggleIcon(index)} src={index <= activeIndex ? activeIcon : disabledIcon} /> )}</Rating>
        </RatingCategoryStyle>
    )
}