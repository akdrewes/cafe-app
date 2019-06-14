import React from 'react'
import {RatingCategoryStyle, Label, Rating,  RatingIcon} from './CafeCardStyles.js'

export default function RatingCategorySt({colour, label, length, icon}) {
    return(
        <RatingCategoryStyle>
            <Label color={colour}>{label}</Label>
            <Rating>{new Array(length).fill('').map((placeholder, index) => <RatingIcon key={index} src={icon} /> )}</Rating>
        </RatingCategoryStyle>
    )
}