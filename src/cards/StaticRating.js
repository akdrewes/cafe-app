import React from 'react'
import RatingCategorySt from './RatingCategorySt'
import WorkIcon from '../images/WorkAtmosphereY.png'
import WlanIcon from '../images/WLANY.png'
import CupIcon from '../images/CupY.png'

export default function StaticRating({score, counter}) {

    const {workAtmosphere, wlan, coffee} = score
    const rating = [Math.round(workAtmosphere/counter), Math.round(wlan/counter), Math.round(coffee/counter)]
    
    return (
        <>
            <RatingCategorySt colour={`#F2F5F5`} label={`Work climate`} length={rating[0]} icon={WorkIcon} />
            <RatingCategorySt colour={`#F2F5F5`} label={`WLAN`} length={rating[1]} icon={WlanIcon} />
            <RatingCategorySt colour={`#F2F5F5`} label={`Coffee`} length={rating[2]} icon={CupIcon} />
        </>
    )
}