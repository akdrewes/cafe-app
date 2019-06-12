import React from 'react'
import {RatingCategoryStyle, Label, Rating,  RatingIcon} from './CafeCardStyles.js'

export default function RatingCategorySt({label, length, icon}) {
    return(
        <RatingCategoryStyle>
            <Label>{label}</Label>
            <Rating>{new Array(length).fill('').map((placeholder, index) => <RatingIcon key={index} src={icon} /> )}</Rating>
        </RatingCategoryStyle>
    )
}