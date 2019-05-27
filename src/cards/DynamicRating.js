import React from 'react'
import styled from 'styled-components'
import WorkIcon from '../images/WorkAtmosphereY.png'
import WorkIconDisabled from '../images/WorkAtmosphereN.png'
import WlanIcon from '../images/WLANY.png'
import WlanIconDisabled from '../images/WLANN.png'
import CupIcon from '../images/CupY.png'
import CupIconDisabled from '../images/CupN.png'

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


export default function DynamicRating() {
    
    return (
        <>
            <SingleRating>{new Array(5).fill('').map(() => <WorkIconStyle src={WorkIconDisabled} /> )}</SingleRating>
            <SingleRating>{new Array(5).fill('').map(() => <WlanIconStyle src={WlanIconDisabled} /> )}</SingleRating>
            <SingleRating>{new Array(5).fill('').map(() => <CupIconStyle src={CupIconDisabled} /> )}</SingleRating>
        </>
    )
}