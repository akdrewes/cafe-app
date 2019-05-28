import React, { useState } from 'react'
import styled from 'styled-components'
import WorkIcon from '../images/WorkAtmosphereY.png'
import WorkIconDisabled from '../images/WorkAtmosphereN.png'
import WlanIcon from '../images/WLANY.png'
import WlanIconDisabled from '../images/WLANN.png'
import CupIcon from '../images/CupY.png'
import CupIconDisabled from '../images/CupN.png'

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

export default function DynamicRating() {

    const [activeWorkIndex, setActiveWorkIndex] = useState(null)
    const [activeWlanIndex, setActiveWlanIndex] = useState(null)
    const [activeCupIndex, setActiveCupIndex] = useState(null)
    
    const iconsArray = new Array(5).fill('');
    
    const handleToggleWorkIcon = (index1) => {
        setActiveWorkIndex(null || index1);
    }

    const handleToggleWlanIcon = (index2) => {
        setActiveWlanIndex(null || index2);
    }

    const handleToggleCupIcon = (index3) => {
        setActiveCupIndex(null || index3);
    }

    return (
        <>
            <RatingCategory>
                <Label>Arbeitsklima</Label>
                <Rating>
                {iconsArray.map((icon, index1) => <WorkIconStyle onClick={() => handleToggleWorkIcon(index1)} src={index1 <= activeWorkIndex ? WorkIcon : WorkIconDisabled} /> )}
                </Rating>
            </RatingCategory>

            <RatingCategory>
                <Label>WLAN</Label>
                <Rating>
                {iconsArray.map((icon, index2) => <WlanIconStyle onClick={() => handleToggleWlanIcon(index2)} src={index2 <= activeWlanIndex ? WlanIcon : WlanIconDisabled} /> )}
                </Rating>
            </RatingCategory>

            <RatingCategory>
                <Label>Kaffee</Label>
                <Rating>
                {iconsArray.map((icon, index3) => <CupIconStyle onClick={() => handleToggleCupIcon(index3)} src={index3 <= activeCupIndex ? CupIcon : CupIconDisabled} /> )}
                </Rating>
            </RatingCategory>
        </>
    )
}

// <Rating label="Arbeitsklima" active={true} icon={WorkIcon} activeIcon={WorkIconActive} activeIndex={2} onIconClick={index => console.log(index)}/>
// <Rating icon={Wlan} activeIcon={WorkIconActive} />
// <Rating icon={WorkIcon} activeIcon={WorkIconActive} /> 