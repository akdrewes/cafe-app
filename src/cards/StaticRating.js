import React from 'react'
import RatingCategory from './RatingCategory'
import WorkIcon from '../images/WorkAtmosphereY.png'
import WlanIcon from '../images/WLANY.png'
import CupIcon from '../images/CupY.png'

export default function StaticRating({score, counter}) {

    const {workAtmosphere, wlan, coffee} = score
    const rating = [Math.round(workAtmosphere/counter), Math.round(wlan/counter), Math.round(coffee/counter)]
    
    return (
        <>
            <RatingCategory label={`Work climate`} length={rating[0]} icon={WorkIcon} />
            <RatingCategory label={`WLAN`} length={rating[1]} icon={WlanIcon} />
            <RatingCategory label={`Coffee`} length={rating[2]} icon={CupIcon} />
        </>
    )
}