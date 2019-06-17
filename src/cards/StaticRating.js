import React from 'react'
import PropTypes from 'prop-types'
import StaticRatingCategory from './StaticRatingCategory'
import WorkIcon from '../images/WorkAtmosphereY.png'
import WlanIcon from '../images/WLANY.png'
import CupIcon from '../images/CupY.png'

export default function StaticRating({score, counter}) {

    const {workAtmosphere, wlan, coffee} = score
    const rating = [Math.round(workAtmosphere/counter), Math.round(wlan/counter), Math.round(coffee/counter)]
    
    return (
        <>
            <StaticRatingCategory colour={`#F2F5F5`} label={`Work climate`} length={rating[0]} icon={WorkIcon} />
            <StaticRatingCategory colour={`#F2F5F5`} label={`WLAN`} length={rating[1]} icon={WlanIcon} />
            <StaticRatingCategory colour={`#F2F5F5`} label={`Coffee`} length={rating[2]} icon={CupIcon} />
        </>
    )
}

StaticRating.propTypes = {
    score: PropTypes.objectOf(PropTypes.number).isRequired,
    counter: PropTypes.number.isRequired
}