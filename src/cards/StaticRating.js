import React from 'react'
import styled from 'styled-components'
import WorkIcon from '../images/WorkAtmosphereY.png'
import WlanIcon from '../images/WLANY.png'
import CupIcon from '../images/CupY.png'

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

export default function StaticRating({rating}) {
    
    const {workAtmosphere, wlan, coffee} = rating
    
    return (
        <>
            <SingleRating>{new Array(workAtmosphere).fill('').map(() => <WorkIconStyle src={WorkIcon} /> )}</SingleRating>
            <SingleRating>{new Array(wlan).fill('').map(() => <WlanIconStyle src={WlanIcon} /> )}</SingleRating>
            <SingleRating>{new Array(coffee).fill('').map(() => <CupIconStyle src={CupIcon} /> )}</SingleRating>
        </>
    )
}