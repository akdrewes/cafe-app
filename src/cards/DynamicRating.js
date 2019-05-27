import React, { useState } from 'react'
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

    const [activeWorkIndex, setActiveWorkIndex] = useState(null)
    const [activeWlanIndex, setActiveWlanIndex] = useState(null)
    const [activeCupIndex, setActiveCupIndex] = useState(null)
    
    const iconsArray = new Array(5).fill('');
    
    const handleToggleWorkIcon = (index1) => {
        setActiveWorkIndex(index1);
    }

    const handleToggleWlanIcon = (index2) => {
        setActiveWlanIndex(index2);
    }

    const handleToggleCupIcon = (index3) => {
        setActiveCupIndex(index3);
    }

    return (
        <>
            <SingleRating>
                {iconsArray.map((icon, index1) => <WorkIconStyle onClick={() => handleToggleWorkIcon(index1)} src={index1 <= activeWorkIndex ? WorkIcon : WorkIconDisabled} /> )}
            </SingleRating>

            <SingleRating>
                {iconsArray.map((icon, index2) => <WlanIconStyle onClick={() => handleToggleWlanIcon(index2)} src={index2 <= activeWlanIndex ? WlanIcon : WlanIconDisabled} /> )}
            </SingleRating>

            <SingleRating>
                {iconsArray.map((icon, index3) => <CupIconStyle onClick={() => handleToggleCupIcon(index3)} src={index3 <= activeCupIndex ? CupIcon : CupIconDisabled} /> )}
            </SingleRating>
        </>
    )
}

// <Rating label="Arbeitsklima" active={true} icon={WorkIcon} activeIcon={WorkIconActive} activeIndex={2} onIconClick={index => console.log(index)}/>
// <Rating icon={Wlan} activeIcon={WorkIconActive} />
// <Rating icon={WorkIcon} activeIcon={WorkIconActive} /> 