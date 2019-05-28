import React from 'react'
import styled from 'styled-components'
import WorkIcon from '../images/WorkAtmosphereY.png'
import WlanIcon from '../images/WLANY.png'
import CupIcon from '../images/CupY.png'

const RatingCategory = styled.div`
display: grid;
grid-template-columns: 45% 55%;
`

const Label = styled.label`
grid-column: 1 / 2;
display: flex;
align-items: center;
color: #E4E9F2;
font-family: Tahoma, sans-serif;
font-size: 14px;
letter-spacing: 0.64px;
`

const Rating = styled.div`
grid-column: 2 / 3;
display: grid;
grid-template-columns: repeat(5, 1fr);
`

const WorkIconStyle = styled.img`
height: 100%;
width: 90%;
align-self: center;
`

const WlanIconStyle = styled.img`
height: 70%;
width: 90%;
align-self: center;
`

const CupIconStyle = styled.img`
height: 70%;
width: 90%;
align-self: center;
`

export default function StaticRating({rating}) {
    
    const {workAtmosphere, wlan, coffee} = rating
    
    return (
        <>
            <RatingCategory>
                <Label>Arbeitsklima</Label>
                <Rating>{new Array(workAtmosphere).fill('').map(() => <WorkIconStyle src={WorkIcon} /> )}</Rating>
            </RatingCategory>
            <RatingCategory>
                <Label>WLAN</Label>
                <Rating>{new Array(wlan).fill('').map(() => <WlanIconStyle src={WlanIcon} /> )}</Rating>
            </RatingCategory>
            <RatingCategory>
                <Label>Kaffee</Label>
                <Rating>{new Array(coffee).fill('').map(() => <CupIconStyle src={CupIcon} /> )}</Rating>
            </RatingCategory> 
        </>
    )
}