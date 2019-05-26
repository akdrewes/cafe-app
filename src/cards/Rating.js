import React from 'react'
import styled from 'styled-components'
import WorkIcon from '../images/WorkAtmosphereY.png'
import WlanIcon from '../images/WLANY.png'
import CupIcon from '../images/CupY.png'

const Button = styled.div`
grid-row: 1 / 2;
grid-column: 2 / 3;
display: flex;
justify-content: flex-end;
color: #53736A;
font-family: Tahoma, sans-serif;
font-size: 12px;
letter-spacing: 0.64px;
`

const AllRatings = styled.div`
display: grid;
grid-row: 2 / 3;
grid-column: 2 / 3;
`

const SingleRating = styled.div`
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

export default function Rating({rating}) {
const {workAtmosphere, wlan, coffee} = rating
    
    return (
        <>
        <Button><em>Bewertung abgeben</em></Button>
        <AllRatings>
            <SingleRating>{new Array(workAtmosphere).fill('').map(() => <WorkIconStyle src={WorkIcon} /> )}</SingleRating>
            <SingleRating>{new Array(wlan).fill('').map(() => <WlanIconStyle src={WlanIcon} /> )}</SingleRating>
            <SingleRating>{new Array(coffee).fill('').map(() => <CupIconStyle src={CupIcon} /> )}</SingleRating>
        </AllRatings>
        </>
    )
}