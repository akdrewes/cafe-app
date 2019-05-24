import React from 'react'
import styled from 'styled-components'
import WorkIcon from '../images/WorkAtmosphereY.png'
import WlanIcon from '../images/WLANY.png'
import CupIcon from '../images/CupY.png'

const AllRatings = styled.div`
grid-column: 2 / 3;
display: flex;
flex-direction: column;
`

const SingleRating = styled.div`
display: flex;
justify-content: flex-end;
margin-bottom: 5px;
`

const WorkIconStyle = styled.img`
height: 98%;
width: 17%;
`

const WlanIconStyle = styled.img`
height: 90%;
width: 17%;
`

const CupIconStyle = styled.img`
height: 90%;
width: 17%;
`

export default function Rating() {

    return (
        <AllRatings>
            <SingleRating>{new Array(5).fill('').map(() => <WorkIconStyle src={WorkIcon} /> )}</SingleRating>
            <SingleRating>{new Array(5).fill('').map(() => <WlanIconStyle src={WlanIcon} /> )}</SingleRating>
            <SingleRating>{new Array(5).fill('').map(() => <CupIconStyle src={CupIcon} /> )}</SingleRating>
        </AllRatings>
    )
}