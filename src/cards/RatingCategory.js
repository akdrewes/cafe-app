import React from 'react'
import styled from 'styled-components'
import {RatingCategoryStyle, Label, Rating} from './CafeCardStyles.js'

const RatingIcon = styled.img`
    width: 90%;
    align-self: center;
`

export default function RatingCategoryX({label, length, icon}) {
    return(
        <RatingCategoryStyle>
            <Label>{label}</Label>
            <Rating>{new Array(length).fill('').map((placeholder, index) => <RatingIcon key={index} src={icon} /> )}</Rating>
        </RatingCategoryStyle>
    )
}